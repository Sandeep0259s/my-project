import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    ButtonGroup,
    Button,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Heading,
    Box,
    InputGroup,
    InputRightElement,
    useToast
  } from '@chakra-ui/react';
  
  import { UnlockIcon } from '@chakra-ui/icons';
  
  import axios from 'axios';
  import { api } from '../actions/api';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  
  export const ResetPassword = () => {
    const nav = useNavigate();
    const [Email, setEmail] = useState('');
    const [Pwd, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    // Password visibility toggle
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    // Toast for feedback
    const toast = useToast();
  
    // Form Validation
    const validateForm = () => {
      if (!Email || !Pwd || !confirmPassword) {
        if (!toast.isActive('msg')) {
          toast({
            id: 'msg',
            title: 'All fields are required.',
            description: 'Please fill in all fields.',
            status: 'error',
            duration: 5000,
            position: "top",
            isClosable: true,
          });
        }
        return false;
      }
  
      if (Pwd !== confirmPassword) {
        if (!toast.isActive('msg')) {
          toast({
            id: 'msg',
            title: 'Passwords do not match.',
            description: 'Please ensure the passwords match.',
            status: 'error',
            duration: 5000,
            position: "top",
            isClosable: true,
          });
        }
        return false;
      }
  
      return true;
    };
  
    const Resetpassword = async () => {
      if (validateForm()) {
        await axios.post(api + "/resetpwd", { Email, Pwd })
          .then((res) => {
            if (res.data.message) {
              if (!toast.isActive('msg')) {
                toast({
                  id: 'msg',
                  title: 'Success',
                  description: "Your password has been reset.",
                  position: "top",
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                });
              }
              nav('/signin');
            } else {
              if (!toast.isActive('msg')) {
                toast({
                  id: 'msg',
                  title: 'Error resetting password',
                  description: res.data.error || "An error occurred.",
                  position: "top",
                  status: 'error',
                  duration: 3000,
                  isClosable: false,
                });
              }
            }
          })
          .catch((e) => console.log(e));
      }
    };
  
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH="100vh"
        bgGradient='linear(to-tr,  #304463, teal)'
      >
        <Card
          w={{ base: "90%", sm: "400px" }}
          p={6}
          bg="white"
          boxShadow="lg"
          borderRadius="20px"
        >
          <CardHeader>
            <Box display="flex" justifyContent="center" alignItems="center" mb={4} mt={2}>
              <UnlockIcon boxSize={12} color="teal" />
            </Box>
            <Heading size="md" textAlign="center" mb={4}>Reset Password</Heading>
          </CardHeader>
          <CardBody>
            <FormControl mb={4} isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
  
            <FormControl mb={4} isRequired>
              <FormLabel>New Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={toggleShowPassword}>
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
  
            <FormControl mb={6} isRequired>
              <FormLabel>Confirm New Password</FormLabel>
              <InputGroup>
                <Input
                  type={"password"}
                  placeholder="Re-enter new password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </InputGroup>
            </FormControl>
  
            <ButtonGroup width="100%" spacing="0">
              <Button colorScheme="blue" width="100%" variant={'outline'} onClick={Resetpassword}>
                Reset Password
              </Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Box>
    );
  }
  