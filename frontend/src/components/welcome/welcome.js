// import {
//     Alert,
//     AlertDescription,
//     AlertIcon,
//     AlertTitle,
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     ButtonGroup,
//     Button,
//     Input,
//     FormControl,
//     FormLabel,
//     FormErrorMessage,
//     FormHelperText,
//     Heading,
//     Box,
//     InputGroup,
//     InputRightElement,
//     useToast,
//     Stack,
//     StackDivider,
//     Text
//   } from '@chakra-ui/react';
  
//   import { LockIcon } from '@chakra-ui/icons';
//   import axios from 'axios';
//   import { api } from '../actions/api';
//   import { useState } from 'react';
//   import { useNavigate } from 'react-router-dom';
  
//   export const WcPg = () => {
//     const nav = useNavigate();
   
//     const toast = useToast();
  
   
  
//     const validateForm = () => {
      
//     };
  
//     const gosignup = () => nav('/signin');
    
  
//     const Wcpg = async () => {
     
//       }
    
  
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         minH="100vh"
//         bgGradient="linear(to-tr, #7091E6, #cccccc)"
//       >
        
//         <Card>
//   <CardHeader>
//     <Heading textAlign="center"  size='md' >     Welome ODESSEY    </Heading>
//   </CardHeader>

//   <CardBody>
//     <Stack divider={<StackDivider />} spacing='4'>
     
//       <Box textAlign="center" width="100%" p={1}>
//               Please signin for better updates <Button variant="link" colorScheme="blue" onClick={gosignup}>Sign In</Button>
//             </Box>
//     </Stack>
//   </CardBody>
// </Card>
//       </Box>
//     );
//   };
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Button,
  Text,
  useToast
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const WcPg = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const gosignup = () => navigate('/signin');

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      bgGradient="linear(to-br, #fbc2eb, #a6c0fe)" // Smooth gradient background
      p={4} // Padding for spacing
    >
      <Card
        maxW="md"
        p={6}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
        textAlign="center" // Center the content inside the card
      >
        <CardHeader>
          <Heading size="lg" mb={4}>
            Welcome to ODESSEY
          </Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing={4}>
            <Text fontSize="lg">
              Please sign in for better updates.
            </Text>
            <Button
              colorScheme="blue"
              size="lg"
              onClick={gosignup}
              variant="solid"
            >
              Sign In
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};
