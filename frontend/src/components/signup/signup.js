import {
  Box,
  Card,
  CardHeader,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
  Heading,
  ButtonGroup,
  Text,
  RadioGroup,
  Radio,
  Stack,
  Checkbox,
  SimpleGrid,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { api } from '../actions/api';


export const SignUp = () => {
  const nav = useNavigate();
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [Age, setAge] = useState('');
  const [Mnum, setMnum] = useState('');
  const [Email, setEmail] = useState('');
  const [Pwd, setPassword] = useState('');
  const [Gen, setGender] = useState('male');
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [pwdStrength, setPwdStrength] = useState('');
  const toast = useToast();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const gosignin = () => {
    nav('/signin');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const lengthCriteria = /.{8,}/;
    const uppercaseCriteria = /[A-Z]/;
    const lowercaseCriteria = /[a-z]/;
    const digitCriteria = /\d/;
    const specialCharCriteria = /[!@#$%^&*()_+{}\[\]:;"'<>,.?~\\/-]/;

    if (lengthCriteria.test(password) &&
        uppercaseCriteria.test(password) &&
        lowercaseCriteria.test(password) &&
        digitCriteria.test(password) &&
        specialCharCriteria.test(password)) {
      return 'Strong';
    }
    if (lengthCriteria.test(password) &&
        (uppercaseCriteria.test(password) || lowercaseCriteria.test(password)) &&
        (digitCriteria.test(password) || specialCharCriteria.test(password))) {
      return 'Moderate';
    }
    return 'Weak';
  };

  const validateForm = () => {
    if (!Fname || !Lname || !Age || !Mnum || !Email || !Pwd || !isChecked) {
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

    if (parseInt(Age) < 18) {
      if (!toast.isActive('msg')) {
        toast({
          id: 'msg',
          title: 'Invalid Age',
          description: 'You must be at least 18 years old to sign up.',
          status: 'error',
          duration: 5000,
          position: 'top',
          isClosable: true,
        });
      }
      return false;
    }
    if (parseInt(Age) > 60) {
      if (!toast.isActive('msg')) {
        toast({
          id: 'msg',
          title: 'Invalid Age',
          description: 'Your age must be less than 60 years old to sign up.',
          status: 'error',
          duration: 5000,
          position: 'top',
          isClosable: true,
        });
      }
      return false;
    }

    if (!validateEmail(Email)) {
      if (!toast.isActive('msg')) {
        toast({
          id: 'msg',
          title: 'Invalid Email Address',
          description: 'Please enter a valid email address.',
          status: 'error',
          duration: 5000,
          position: 'top',
          isClosable: true,
        });
      }
      return false;
    }

    if (Mnum.length !== 10) {
      if (!toast.isActive('msg')) {
        toast({
          id: 'msg',
          title: 'Invalid Mobile Number',
          description: 'Mobile number must be exactly 10 digits.',
          status: 'error',
          duration: 5000,
          position: 'top',
          isClosable: true,
        });
      }
      return false;
    }

    const passwordStrength = validatePassword(Pwd);
    if (passwordStrength === 'Weak') {
      if (!toast.isActive('msg')) {
        toast({
          id: 'msg',
          title: 'Weak Password',
          description: 'Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters.',
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

  const Signup = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post(`${api}/signup`, { Fname, Lname, Age, Mnum, Email, Pwd, Gen });
        if (response.data.message) {
          
          window.location.href = '/home';
        
          nav('/signin');
        }else {
          if (!toast.isActive('msg')) {
            toast({
              id: 'msg',
              title: 'Account Successfully Created',
              description: '',
              status: 'success',
              duration: 2000,
              position: 'top',
              isClosable: true,
            });
          }
        }
      } catch (error) {
        console.error(error);
        if (!toast.isActive('msg')) {
          toast({
            id: 'msg',
            title: 'An error occurred.',
            description: 'Please try again later.',
            status: 'error',
            duration: 5000,
            position: 'top',
            isClosable: true,
          });
        }
      }
    
    }
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9]+$/.test(value)) {
      const numberValue = parseInt(value, 10);
      if (numberValue >= 0) {
        setAge(value);
      }
    }
  };

  const handleMnumChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9]{0,10}$/.test(value)) {
      setMnum(value);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPwdStrength(validatePassword(value));
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      bgGradient="linear(to-tr, #304463, teal)"
      p={4}
    >
      <Card
        w={{ base: '90%', sm: '600px' }}
        maxH="95vh"
        p={6}
        bg="white"
        boxShadow="lg"
        borderRadius="md"
      >
        <CardHeader>
          <Heading size="md" textAlign="center" mb={4}>
            Sign Up
          </Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                placeholder=""
                value={Fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                placeholder=""
                value={Lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </FormControl>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={2}>
            <FormControl isRequired>
              <FormLabel>Age</FormLabel>
              <Input
                type="number"
                placeholder=""
                value={Age}
                onChange={handleAgeChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Mobile Number</FormLabel>
              <InputGroup>
                <InputLeftAddon>+91</InputLeftAddon>
                <Input
                  type="text"
                  placeholder=""
                  value={Mnum}
                  onChange={handleMnumChange}
                />
              </InputGroup>
              <FormHelperText>Mobile number must be exactly 10 digits.</FormHelperText>
            </FormControl>
          </SimpleGrid>

          <FormControl mb={4} isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl mb={4} isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a password"
                value={Pwd}
                onChange={handlePasswordChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={toggleShowPassword}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormHelperText mt={2}>
              Password Strength: {pwdStrength}
            </FormHelperText>
          </FormControl>

          <FormControl as="fieldset" mb={4} isRequired>
            <FormLabel as="legend">Gender</FormLabel>
            <RadioGroup onChange={setGender} value={Gen}>
              <Stack direction="row">
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="other">Other</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl mb={4}>
            <Checkbox
              onChange={handleCheckboxChange}
              isChecked={isChecked}
              isRequired
            >
              I agree to the <Text as="span" color="blue.500">Terms and Conditions</Text>
            </Checkbox>
          </FormControl>

          <FormControl mb={4}>
            <ButtonGroup width="100%" spacing="0">
              <Button
                colorScheme="blue"
                width="100%"
                variant="outline"
                isDisabled={!isChecked}
                onClick={Signup}
              >
                Sign Up
              </Button>
            </ButtonGroup>
            <Text textAlign="center" width="100%" p={1}>
              Already have an account?{' '}
              <Button variant="link" colorScheme="blue" onClick={gosignin}>
                Sign In
              </Button>
            </Text>
          </FormControl>
        </CardBody>
      </Card>
    </Box>
  );
};
