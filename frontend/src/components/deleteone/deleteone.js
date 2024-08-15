import {
  Card,
  CardHeader,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Box,
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { api } from '../actions/api';
import { useNavigate } from 'react-router-dom';

export const DeleteOne = () => {
  const [Email, setEmail] = useState('');
  const toast = useToast();
  const nav = useNavigate();

  const Deleteone = async () => {
    if (!Email) {
      toast({
        title: 'Email is required.',
        description: 'Please enter your email address.',
        status: 'error',
        duration: 5000,
        position: "top",
        isClosable: true,
      });
      return;
    }

    try {
      const response = await axios.post(api + "/deleteone", { Email });

      if (response.data.message) {
        toast({
          title: 'Account Deleted',
          description: 'Your account has been successfully deleted.',
          status: 'success',
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        nav('/signin'); // Redirect to signup or another page after account deletion
      } else {
        toast({
          title: 'Error',
          description: response.data.error || 'Something went wrong.',
          status: 'error',
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error deleting account:', error);
      toast({
        title: 'Error',
        description: 'Unable to delete account. Please try again later.',
        status: 'error',
        duration: 5000,
        position: "top",
        isClosable: true,
      });
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
          <Heading size="md" textAlign="center" mb={4}>Delete Account</Heading>
        </CardHeader>
        <CardBody>
          <FormControl mb={4} isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input 
              type="email" 
              placeholder="Enter your email" 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </FormControl>

          <Button 
            colorScheme="red" 
            width="100%" 
            variant="solid" 
            onClick={Deleteone}
          >
            Delete Account
          </Button>
        </CardBody>
      </Card>
    </Box>
  );
};
