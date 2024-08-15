// //update profile
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   Stack,
//   Text,
//   useToast
// } from '@chakra-ui/react';
// import { api } from '../actions/api'; // Update this path based on your project structure

// export function UpdateProfile() {
//   const [profileData, setProfileData] = useState({
//     firstName: '',
//     lastName: '',
//     mobileNumber: ''
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const toast = useToast();

//   // Fetch user data from the database
//   const fetchProfileData = async () => {
//     try {
//       const response = await axios.get(api + '/profile');
//       setProfileData(response.data);
//     } catch (error) {
//       console.error('Error fetching profile data:', error);
//       toast({
//         title: 'Error',
//         description: 'Failed to fetch profile data',
//         status: 'error',
//         duration: 5000,
//         isClosable: true
//       });
//     }
//   };

//   useEffect(() => {
//     fetchProfileData();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleUpdateClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveChanges = async () => {
//     try {
//       await axios.put(api + '/profile', profileData);
//       setIsEditing(false);
//       toast({
//         title: 'Success',
//         description: 'Profile updated successfully',
//         status: 'success',
//         duration: 5000,
//         isClosable: true
//       });
//     } catch (error) {
//       console.error('Error updating profile data:', error);
//       toast({
//         title: 'Error',
//         description: 'Failed to update profile data',
//         status: 'error',
//         duration: 5000,
//         isClosable: true
//       });
//     }
//   };

//   return (
//     <Box bg="#f8f9fa" minH="100vh" p={5}>
//       <Flex direction="column" maxW="600px" mx="auto" bg="white" p={6} borderRadius="md" boxShadow="md">
//         <Text fontSize="2xl" mb={4} fontWeight="bold">
//           Update Profile
//         </Text>
//         <Stack spacing={4}>
//           <FormControl>
//             <FormLabel htmlFor="firstName">First Name</FormLabel>
//             <Input
//               id="firstName"
//               name="firstName"
//               value={profileData.firstName}
//               onChange={handleInputChange}
//               isReadOnly={!isEditing}
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel htmlFor="lastName">Last Name</FormLabel>
//             <Input
//               id="lastName"
//               name="lastName"
//               value={profileData.lastName}
//               onChange={handleInputChange}
//               isReadOnly={!isEditing}
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel htmlFor="mobileNumber">Mobile Number</FormLabel>
//             <Input
//               id="mobileNumber"
//               name="mobileNumber"
//               value={profileData.mobileNumber}
//               onChange={handleInputChange}
//               isReadOnly={!isEditing}
//             />
//           </FormControl>
//         </Stack>
//         <Flex mt={6} justifyContent="flex-end">
//           {!isEditing ? (
//             <Button colorScheme="blue" onClick={handleUpdateClick}>
//               Update Details
//             </Button>
//           ) : (
//             <Button colorScheme="teal" onClick={handleSaveChanges}>
//               Save Changes
//             </Button>
//           )}
//         </Flex>
//       </Flex>
//     </Box>
//   );
// }
import { 
    Box, 
    Flex, 
    Heading, 
    Text, 
    Button, 
    VStack, 
    Card, 
    CardBody, 
    CardFooter 
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  
  export const Team = () => {
    const nav = useNavigate()   
    //signout function
   
      const gobook = () => {
        sessionStorage?.removeItem('auth')
        nav('/home')
      }
    
    

    //session Storage
    const auth = JSON.parse(sessionStorage?.auth)
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minH="100vh" 
        bg="gray"
      >
        <Card 
          bg="white" 
          borderRadius="md" 
          boxShadow="lg" 
          maxW="sm"
          minW = "70vh"
          mx="auto"
          textAlign="center"
        >
          <CardBody>
            <Heading size="lg" mb={4}>Profile</Heading>
            <Text fontSize="md" mb={6}>First Name: {auth.Fname}</Text>
            <Text fontSize="md" mb={6}>Last Name: {auth.Lname}</Text>
            <Text fontSize="md" mb={6}>Age: {auth.Age}</Text>
            <Text fontSize="md" mb={6}>Gender: {auth.Gen}</Text>
          </CardBody>
          <CardFooter>
            <VStack spacing={4} w="100%">
              <Button variant="outline" colorScheme="" w="full" onClick={gobook}>Go to Booking Page</Button>
            </VStack>
          </CardFooter>
        </Card>
      </Box>
    );
  };