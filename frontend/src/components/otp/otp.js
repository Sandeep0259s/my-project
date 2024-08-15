
import React, { useState } from 'react';
import {
  Box,
  Button,
  HStack,
  PinInput,
  PinInputField,
  FormControl,
  FormLabel,
  useToast,
  Flex,
} from '@chakra-ui/react';

const generateOtp = (length) => {
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * digits.length)];
  }
  return otp;
};

const OtpInput = ({ length = 6 }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const [generatedOtp, setGeneratedOtp] = useState(generateOtp(length));
  const toast = useToast();

  const handleChange = (value) => {
    setOtp(value.split(''));
  };

  const handleFocus = (event) => {
    event.target.select();
  };

  const handleSubmit = () => {
    const otpValue = otp.join('');
    if (otpValue.length === length) {
      if (otpValue === generatedOtp) {
        toast({
          title: "OTP Verified",
          description: "The OTP you entered is correct.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Invalid OTP",
          description: "The OTP you entered is incorrect.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Incomplete OTP",
        description: "Please enter the complete OTP.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleGenerateOtp = () => {
    const newOtp = generateOtp(length);
    setGeneratedOtp(newOtp);
    toast({
      title: "New OTP Generated",
      description: `The new OTP is: ${newOtp}`,
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Flex
      align="center"
      justify="center"
      minH="100vh"
      bg="gray.50"
      p={4}
    >
      <Box
        p={6}
        borderWidth={1}
        borderRadius="md"
        bg="white"
        shadow="md"
        maxW="400px"
        w="full"
      >
        <FormControl>
          <FormLabel size="md" textAlign="center" mb={6}>Enter OTP</FormLabel>
          <HStack spacing={4} mb={4}>
            <PinInput
              size="lg"
              onChange={handleChange}
              value={otp.join('')}
            >
              {Array.from({ length }).map((_, index) => (
                <PinInputField
                  key={index}
                  onFocus={handleFocus}
                  borderRadius="md"
                  borderColor="gray.300"
                />
              ))}
            </PinInput>
          </HStack>
          <Button colorScheme="blue" onClick={handleSubmit} width="full" mb={4}>
            Submit
          </Button>
          <Button colorScheme="teal" onClick={handleGenerateOtp} width="full">
            Generate New OTP
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default OtpInput;