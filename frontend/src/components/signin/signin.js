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
  useToast,
} from '@chakra-ui/react';

import { LockIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { api } from '../actions/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const nav = useNavigate();
  const [Email, setEmail] = useState('');
  const [Pwd, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const validateForm = () => {
    if (!Email || !Pwd) {
      if (!toast.isActive('msg')) {
        toast({
          id: 'msg',
          title: 'All fields are required.',
          description: 'Please fill in all fields.',
          status: 'error',
          duration: 5000,
          position: 'top',
          isClosable: true,
        });
      }
      return false;
    }
    return true;
  };

  const gosignup = () => nav('/signup');
  const goreset = () => nav('/resetpwd');

  const Signin = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post(api + '/signin', { Email, Pwd });
        if (response.data.message) {
          sessionStorage.auth = JSON.stringify(response?.data?.values);
          if (!toast.isActive('msg')) {
            toast({
              id: 'msg',
              title: 'Success',
              description: '',
              position: 'top',
              status: 'success',
              duration: 3000,
              isClosable: true,
            });
          }
          window.location.href = '/home';
        } else {
          if (!toast.isActive('msg')) {
            toast({
              id: 'msg',
              title: 'Wrong Credentials',
              description: '',
              position: 'top',
              status: 'error',
              duration: 3000,
              isClosable: false,
            });
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      bgGradient="linear(to-tr, #7091E6, #cccccc)"
    >
      <Card
        w={{ base: '90%', sm: '400px' }}
        p={6}
        bg="rgba(255, 255, 255, 0.15)"
        backdropFilter="blur(25px)"
        borderRadius="20px"
        boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
        border="1px solid rgba(255, 255, 255, 0.18)"
      >
        <CardHeader>
          <Box display="flex" justifyContent="center" alignItems="center" mb={4} mt={2}>
            <LockIcon boxSize={12} color="#3d52a0" />
          </Box>
          <Heading size="md" textAlign="center" mb={4}>
            Sign In
          </Heading>
        </CardHeader>
        <CardBody>
          <FormControl mb={4} isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl mb={6} isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={toggleShowPassword}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormHelperText>We'll never share your password.</FormHelperText>
          </FormControl>

          <ButtonGroup width="100%" spacing="0">
            <Button colorScheme="blue" width="100%" variant="outline" onClick={Signin}>
              Sign In
            </Button>
          </ButtonGroup>
          <Box textAlign="center" width="100%" p={1}>
            Don't have an account? <Button variant="link" colorScheme="blue" onClick={gosignup}>Sign Up</Button>
          </Box>

          <Box textAlign="center" width="100%">
            Forgot Password? <Button variant="link" colorScheme="blue" onClick={goreset}>Reset</Button>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};
