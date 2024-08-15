
// import React from 'react';
// import { Box, Stack, Heading, Text, Button, Flex, Image, Input, VStack, HStack, Grid, Checkbox } from '@chakra-ui/react';
// import { ArrowForwardIcon } from '@chakra-ui/icons';
// import { Riskfactor } from '../risk factor/rkfr';

// export const Book = () => {
//   return (
//     <Flex
//       direction={{ base: 'column', lg: 'row' }} // Stack vertically on small screens, horizontally on larger screens
//       align="center"
//       justify="center"
//       minHeight="100vh" // Ensures the container takes full viewport height
//       bg="gray.50"
//       p={4}
//     >
//       {/* Booking Details Section */}
//       <Box
//         borderWidth='1px'
//         borderRadius='md'
//         overflow='hidden'
//         boxShadow='md'
//         bg='white'
//         p={4}
//         width={{ base: '100%', md: '60%', lg: '50%' }} // Responsive width
//         mr={{ lg: 6 }} // Margin to separate from Riskfactor and Image on larger screens
//       >
//         <Stack spacing={4}>
//           <Heading size='lg' mb={2}>The Perfect Latte</Heading>
//           <Text fontSize='md'>
//             Experience the best scuba diving adventure with our specially curated packages.
//           </Text>

//           {/* Requirements Section */}
//           <Box mt={6}>
//             <Heading size='sm' mb={2}>Requirements</Heading>
//             <VStack align='start' spacing={4}>
//               <HStack spacing={4}>
//                 <Text width='120px' fontWeight='semibold'>Age:</Text>
//                 <Input placeholder='Enter your age' size='sm' />
//               </HStack>
//               <HStack spacing={4}>
//                 <Text width='120px' fontWeight='semibold'>Height:</Text>
//                 <Input placeholder='Enter your height' size='sm' />
//               </HStack>
//               <HStack spacing={4}>
//                 <Text width='120px' fontWeight='semibold'>Weight:</Text>
//                 <Input placeholder='Enter your weight' size='sm' />
//               </HStack>
//             </VStack>
//           </Box>

//           {/* Health Conditions Section */}
//           <Box mt={8}>
//             <Heading size='sm' ml={2}>Select which are applicable</Heading>
//             <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
//               <Checkbox colorScheme='green'>Heart Condition</Checkbox>
//               <Checkbox colorScheme='green'>Diabetes</Checkbox>
//               <Checkbox colorScheme='green'>Asthma</Checkbox>
//               <Checkbox colorScheme='green'>High Blood Pressure</Checkbox>
//               <Checkbox colorScheme='green'>Epilepsy</Checkbox>
//               <Checkbox colorScheme='green'>Pregnancy</Checkbox>
//               <Checkbox colorScheme='green'>Allergies</Checkbox>
//               <Checkbox colorScheme='green'>Other</Checkbox>
//             </Grid>
//           </Box>

//           {/* Book Now Button */}
//           <Button
//             rightIcon={<ArrowForwardIcon />}
//             colorScheme="orange"
//             variant="solid"
//             mt={4}
//             mx="auto"
//             borderRadius='md'
//           >
//             Book Now
//           </Button>
//         </Stack>
//       </Box>

//       {/* Flex Container for Risk Factor and Image */}
//       <Flex
//         direction={{ base: 'column', md: 'row' }} // Stack vertically on small screens, horizontally on larger screens
//         align="center"
//         justify="center"
//         width={{ base: '100%', md: 'auto' }} // Responsive width
//       >
//         {/* Risk Factor Section */}
//         <Box
//           width={{ base: '100%', md: '50%' }} // Responsive width
//           mb={{ base: 6, md: 0 }} // Margin bottom for small screens
//           textAlign="center"
//         >
//           <Heading size='lg' mb={4}>Health Risk Assessment</Heading>
//           <Riskfactor max={100} />
//         </Box>

//         {/* Image Section */}
//         <Box
//           width={{ base: '100%', md: '50%' }} // Responsive width
//           textAlign="center"
//         >
//           <Image
//             objectFit='cover'
//             maxW='100%'
//             height={{ base: '200px', md: 'auto' }}
//             src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
//             alt='Health Risk Assessment'
//           />
//         </Box>
//       </Flex>
//     </Flex>
//   );
// };
// import React, { useState, useEffect } from 'react';
// import { Box, Stack, Heading, Text, Button, Flex, Image, Input, VStack, HStack, Grid, Checkbox } from '@chakra-ui/react';
// import { ArrowForwardIcon } from '@chakra-ui/icons';
// import { Riskfactor } from '../risk factor/rkfr'; // Adjust the import path as needed

// export const Book = () => {
//   // State for user inputs
//   const [age, setAge] = useState('');
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');

//   // State for risk factor
//   const [riskFactor, setRiskFactor] = useState(0);

//   // Calculate BMI and Risk Factor
//   const calculateRisk = () => {
//     const ageValue = parseInt(age, 10) || 0;
//     const heightValue = parseFloat(height, 10) || 0;
//     const weightValue = parseFloat(weight, 10) || 0;

//     if (heightValue > 0) {
//       const heightInMeters = heightValue / 100; // Convert height from cm to meters
//       const bmi = weightValue / (heightInMeters * heightInMeters);

//       // Example risk calculation based on BMI and Age
//       let risk = bmi;

//       // Adjust risk based on age
//       if (ageValue > 60) {
//         risk += 5; // Older age might increase risk
//       } else if (ageValue < 20) {
//         risk -= 3; // Younger age might decrease risk
//       }

//       return Math.min(Math.max(risk, 0), 100); // Ensure the risk is within 0-100
//     }
    
//     return 0;
//   };

//   // Update risk factor when any of the inputs change
//   useEffect(() => {
//     setRiskFactor(calculateRisk());
//   }, [age, height, weight]);

//   return (
//     <Flex
//       direction={{ base: 'column', lg: 'row' }} // Stack vertically on small screens, horizontally on larger screens
//       align="center"
//       justify="center"
//       minHeight="100vh" // Ensures the container takes full viewport height
//       bg="gray.50"
//       p={4}
//     >
//       {/* Booking Details Section */}
//       <Box
//         borderWidth='1px'
//         borderRadius='md'
//         overflow='hidden'
//         boxShadow='md'
//         bg='white'
//         p={4}
//         width={{ base: '100%', md: '60%', lg: '50%' }} // Responsive width
//         mr={{ lg: 6 }} // Margin to separate from Riskfactor and Image on larger screens
//       >
//         <Stack spacing={4}>
//           <Heading size='lg' mb={2}>The Perfect Latte</Heading>
//           <Text fontSize='md'>
//             Experience the best scuba diving adventure with our specially curated packages.
//           </Text>

//           {/* Requirements Section */}
//           <Box mt={6}>
//             <Heading size='sm' mb={2}>Requirements</Heading>
//             <VStack align='start' spacing={4}>
//               <HStack spacing={4}>
//                 <Text width='120px' fontWeight='semibold'>Age:</Text>
//                 <Input 
//                   placeholder='Enter your age' 
//                   size='sm' 
//                   value={age} 
//                   onChange={(e) => setAge(e.target.value)} 
//                   type='number'
//                 />
//               </HStack>
//               <HStack spacing={4}>
//                 <Text width='120px' fontWeight='semibold'>Height (cm):</Text>
//                 <Input 
//                   placeholder='Enter your height in cm' 
//                   size='sm' 
//                   value={height} 
//                   onChange={(e) => setHeight(e.target.value)} 
//                   type='number'
//                 />
//               </HStack>
//               <HStack spacing={4}>
//                 <Text width='120px' fontWeight='semibold'>Weight (kg):</Text>
//                 <Input 
//                   placeholder='Enter your weight in kg' 
//                   size='sm' 
//                   value={weight} 
//                   onChange={(e) => setWeight(e.target.value)} 
//                   type='number'
//                 />
//               </HStack>
//             </VStack>
//           </Box>

//           {/* Health Conditions Section */}
//           <Box mt={8}>
//             <Heading size='sm' ml={2}>Select which are applicable</Heading>
//             <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
//               <Checkbox colorScheme='green'>Heart Condition</Checkbox>
//               <Checkbox colorScheme='green'>Diabetes</Checkbox>
//               <Checkbox colorScheme='green'>Asthma</Checkbox>
//               <Checkbox colorScheme='green'>High Blood Pressure</Checkbox>
//               <Checkbox colorScheme='green'>Epilepsy</Checkbox>
//               <Checkbox colorScheme='green'>Pregnancy</Checkbox>
//               <Checkbox colorScheme='green'>Allergies</Checkbox>
//               <Checkbox colorScheme='green'>Other</Checkbox>
//             </Grid>
//           </Box>

//           {/* Book Now Button */}
//           <Button
//             rightIcon={<ArrowForwardIcon />}
//             colorScheme="orange"
//             variant="solid"
//             mt={4}
//             mx="auto"
//             borderRadius='md'
//           >
//             Book Now
//           </Button>
//         </Stack>
//       </Box>

//       {/* Flex Container for Risk Factor and Image */}
//       <Flex
//         direction={{ base: 'column', md: 'row' }} // Stack vertically on small screens, horizontally on larger screens
//         align="center"
//         justify="center"
//         width={{ base: '100%', md: 'auto' }} // Responsive width
//       >
//         {/* Risk Factor Section */}
//         <Box
//           width={{ base: '100%', md: '50%' }} // Responsive width
//           mb={{ base: 6, md: 0 }} // Margin bottom for small screens
//           textAlign="center"
//         >
//           <Heading size='lg' mb={4}>Health Risk Assessment</Heading>
//           <Riskfactor max={riskFactor} />
//         </Box>

//         {/* Image Section */}
//         <Box
//           width={{ base: '100%', md: '50%' }} // Responsive width
//           textAlign="center"
//         >
//           <Image
//             objectFit='cover'
//             maxW='100%'
//             height={{ base: '200px', md: 'auto' }}
//             src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
//             alt='Health Risk Assessment'
//           />
//         </Box>
//       </Flex>
//     </Flex>
//   );
// };

import React, { useState, useEffect } from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  Input,
  VStack,
  HStack,
  Grid,
  Checkbox
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Riskfactor } from '../risk factor/rkfr'; // Adjust the import path as needed
import { useNavigate } from 'react-router-dom';

export const Book = () => {
  const nav = useNavigate()  
  // State for user inputs
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  // State for risk factor
  const [riskFactor, setRiskFactor] = useState(0);
  const goteam = () => {
    
    nav('/team')
  }


  // Calculate BMI and Risk Factor
  const calculateRisk = () => {
    const ageValue = parseInt(age, 10) || 0;
    const heightValue = parseFloat(height, 10) || 0;
    const weightValue = parseFloat(weight, 10) || 0;

    if (heightValue > 0 && weightValue > 0) {
      const heightInMeters = heightValue / 100; // Convert height from cm to meters
      const bmi = weightValue / (heightInMeters * heightInMeters);

      // Example risk calculation based on BMI and Age
      let risk = bmi;

      // Adjust risk based on age
      if (ageValue > 60) {
        risk += 5; // Older age might increase risk
      } else if (ageValue < 20) {
        risk -= 3; // Younger age might decrease risk
      }

      return Math.min(Math.max(risk, 0), 100); // Ensure the risk is within 0-100
    }
    
    return 0;
  };

  // Update risk factor when any of the inputs change
  useEffect(() => {
    setRiskFactor(calculateRisk());
  }, [age, height, weight]);
  

  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }} // Stack vertically on small screens, horizontally on larger screens
      align="center"
      justify="center"
      minHeight="100vh" // Ensures the container takes full viewport height
      bg="gray.50"
      p={4}
    >
      {/* Booking Details Section */}
      <Box
        borderWidth='1px'
        borderRadius='md'
        overflow='hidden'
        boxShadow='md'
        bg='white'
        p={4}
        width={{ base: '100%', md: '60%', lg: '50%' }} // Responsive width
        mr={{ lg: 6 }} // Margin to separate from Riskfactor and Image on larger screens
      >
        <Stack spacing={4}>
          <Heading size='lg' mb={2}>The Perfect Latte</Heading>
          <Text fontSize='md'>
            Experience the best scuba diving adventure with our specially curated packages.
          </Text>

          {/* Requirements Section */}
          <Box mt={6}>
            <Heading size='sm' mb={2}>Requirements</Heading>
            <VStack align='start' spacing={4}>
              <HStack spacing={4}>
                <Text width='120px' fontWeight='semibold'>Age:</Text>
                <Input 
                  placeholder='Enter your age' 
                  size='sm' 
                  value={age} 
                  onChange={(e) => setAge(e.target.value)} 
                  type='number'
                />
              </HStack>
              <HStack spacing={4}>
                <Text width='120px' fontWeight='semibold'>Height (cm):</Text>
                <Input 
                  placeholder='Enter your height in cm' 
                  size='sm' 
                  value={height} 
                  onChange={(e) => setHeight(e.target.value)} 
                  type='number'
                />
              </HStack>
              <HStack spacing={4}>
                <Text width='120px' fontWeight='semibold'>Weight (kg):</Text>
                <Input 
                  placeholder='Enter your weight in kg' 
                  size='sm' 
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)} 
                  type='number'
                />
              </HStack>
            </VStack>
          </Box>

          {/* Health Conditions Section */}
          <Box mt={8}>
            <Heading size='sm' ml={2}>Select which are applicable</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
              <Checkbox colorScheme='green'>Heart Condition</Checkbox>
              <Checkbox colorScheme='green'>Diabetes</Checkbox>
              <Checkbox colorScheme='green'>Asthma</Checkbox>
              <Checkbox colorScheme='green'>High Blood Pressure</Checkbox>
              <Checkbox colorScheme='green'>Epilepsy</Checkbox>
              <Checkbox colorScheme='green'>Pregnancy</Checkbox>
              <Checkbox colorScheme='green'>Allergies</Checkbox>
              <Checkbox colorScheme='green'>Other</Checkbox>
            </Grid>
          </Box>

          {/* Book Now Button */}
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="orange"
            variant="solid"
            mt={4}
            mx="auto"
            borderRadius='md'
          >
            Book Now
          </Button>
          <VStack spacing={4} w="100%">
              <Button variant="outline" colorScheme="" w="full" onClick={goteam}>Click for team</Button>
            </VStack>
        </Stack>
      </Box>

      {/* Flex Container for Risk Factor and Image */}
      <Flex
        direction={{ base: 'column', md: 'row' }} // Stack vertically on small screens, horizontally on larger screens
        align="center"
        justify="center"
        width={{ base: '100%', md: 'auto' }} // Responsive width
      >
        {/* Risk Factor Section */}
        <Box
          width={{ base: '100%', md: '50%' }} // Responsive width
          mb={{ base: 6, md: 0 }} // Margin bottom for small screens
          textAlign="center"
        >
          <Heading size='lg' mb={4}>Health Risk Assessment</Heading>
          <Riskfactor max={100} risk={riskFactor} />
        </Box>

        {/* Image Section */}
        <Box
          width='400px' // Responsive width
          textAlign="center"
        >
          <Image
            objectFit='cover'
            maxW='100%'
            height={{ base: '200px', md: 'auto' }}
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Health Risk Assessment'
          />
        </Box>
      </Flex>
    </Flex>
  );
};
