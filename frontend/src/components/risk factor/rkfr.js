// // import React, { useState } from 'react';
// // import { Box, CircularProgress, CircularProgressLabel, Input, Text, VStack, useBreakpointValue, Stack } from '@chakra-ui/react';

// // export const Riskfactor = ({ max = 100 }) => {
// //   // Initialize state for the risk value
// //   const [value, setValue] = useState(0);

// //   // Handle change event for the input field
// //   const handleRiskInputChange = (e) => {
// //     const newValue = parseInt(e.target.value, 10);
// //     // Validate and set the value within the allowed range
// //     if (!isNaN(newValue) && newValue >= 0 && newValue <= max) {
// //       setValue(newValue);
// //     }
// //   };

// //   // Calculate the percentage for the progress ring
// //   const percentage = (value / max) * 100;

// //   // Determine the risk factor and ring color based on the value
// //   let ringColor;
// //   let riskMessage;

// //   if (value <= 20) {
// //     ringColor = 'green.400';
// //     riskMessage = 'Good';
// //   } else if (value > 20 && value <= 60) {
// //     ringColor = 'blue.400';
// //     riskMessage = 'Moderate';
// //   } else {
// //     ringColor = 'red.400';
// //     riskMessage = 'Risk';
// //   }

// //   return (
// //     <VStack
     
// //     >
      
// //         <CircularProgress
// //           value={percentage}
// //           size="40"
// //           thickness="5px"
// //           color={ringColor}
// //           trackColor="gray.200"
// //           capIsRound
// //         >
// //           <CircularProgressLabel
// //             fontSize={{ base: 'xl', md: '3xl' }}
// //             fontWeight="bold"
// //             color={ringColor}
// //             textAlign="center"
// //           >
// //             {`${value}`}<br />
// //             {riskMessage}
// //           </CircularProgressLabel>
// //         </CircularProgress>
      
// //       <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold" color="gray.700">
// //         Risk Assessment
// //       </Text>
      
// //     </VStack>
// //   );
// // };
// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   CircularProgress,
//   CircularProgressLabel,
//   Input,
//   Text,
//   VStack,
//   HStack,
//   useToast,
//   FormControl,
//   FormLabel,
//   FormHelperText
// } from '@chakra-ui/react';

// export const Riskfactor = ({ max = 100 }) => {
//   // Initialize state for age, weight, height, and calculated risk
//   const [age, setAge] = useState('');
//   const [weight, setWeight] = useState('');
//   const [height, setHeight] = useState('');
//   const [bmi, setBmi] = useState(0);
//   const [risk, setRisk] = useState(0);

//   // Toast for displaying validation messages
//   const toast = useToast();

//   // Function to calculate BMI based on weight and height
//   const calculateBMI = (weight, height) => {
//     if (weight && height) {
//       // Convert height from cm to meters
//       const heightInMeters = height / 100;
//       // Calculate BMI
//       return weight / (heightInMeters * heightInMeters);
//     }
//     return 0;
//   };

//   // Update BMI and risk factor when weight or height changes
//   useEffect(() => {
//     const calculatedBMI = calculateBMI(parseFloat(weight), parseFloat(height));
//     setBmi(calculatedBMI);

//     // Risk calculation based on BMI
//     const riskValue = calculatedBMI; // Simple BMI as risk; modify based on actual needs
//     setRisk(Math.min(max, Math.max(0, riskValue))); // Ensure risk is within range [0, max]
//   }, [weight, height]);

//   // Handle change event for input fields with validation
//   const handleInputChange = (setter) => (e) => {
//     const value = e.target.value;
//     // Allow empty values or numbers
//     if (value === '' || /^\d*\.?\d*$/.test(value)) {
//       setter(value);
//     } else {
//       toast({
//         title: "Invalid input",
//         description: "Please enter a valid number.",
//         status: "warning",
//         duration: 3000,
//         isClosable: true
//       });
//     }
//   };

//   // Calculate the percentage for the progress ring
//   const percentage = (risk / max) * 100;

//   // Determine the risk factor and ring color based on the BMI value
//   let ringColor;
//   let riskMessage;

//   if (bmi < 18.5) {
//     ringColor = 'blue.400'; // Underweight
//     riskMessage = 'Underweight';
//   } else if (bmi >= 18.5 && bmi < 24.9) {
//     ringColor = 'green.400'; // Normal weight
//     riskMessage = 'Normal';
//   } else if (bmi >= 25 && bmi < 29.9) {
//     ringColor = 'yellow.400'; // Overweight
//     riskMessage = 'Overweight';
//   } else {
//     ringColor = 'red.400'; // Obesity
//     riskMessage = 'Obesity';
//   }

//   return (
//     <VStack
//       spacing={6}
//       p={6}
//       align="stretch"
//       bg="white"
//       borderRadius="md"
//       boxShadow="lg"
//       width={{ base: '90%', sm: '80%', md: '60%', lg: '50%' }} // Responsive width
//       maxW="600px" // Max width for better control
//     >
//       <HStack spacing={4} justifyContent="center">
//         <FormControl>
//           <FormLabel htmlFor="age">Age</FormLabel>
//           <Input
//             id="age"
//             placeholder="Age"
//             type="number"
//             value={age}
//             onChange={handleInputChange(setAge)}
//             width="120px"
//             textAlign="center"
//             borderColor="gray.300"
//             focusBorderColor="teal.500"
//           />
//           <FormHelperText textAlign="center">Enter your age</FormHelperText>
//         </FormControl>

//         <FormControl>
//           <FormLabel htmlFor="weight">Weight (kg)</FormLabel>
//           <Input
//             id="weight"
//             placeholder="Weight"
//             type="number"
//             value={weight}
//             onChange={handleInputChange(setWeight)}
//             width="120px"
//             textAlign="center"
//             borderColor="gray.300"
//             focusBorderColor="teal.500"
//           />
//           <FormHelperText textAlign="center">Enter your weight</FormHelperText>
//         </FormControl>

//         <FormControl>
//           <FormLabel htmlFor="height">Height (cm)</FormLabel>
//           <Input
//             id="height"
//             placeholder="Height"
//             type="number"
//             value={height}
//             onChange={handleInputChange(setHeight)}
//             width="120px"
//             textAlign="center"
//             borderColor="gray.300"
//             focusBorderColor="teal.500"
//           />
//           <FormHelperText textAlign="center">Enter your height</FormHelperText>
//         </FormControl>
//       </HStack>

//       <Box textAlign="center">
//         <CircularProgress
//           value={percentage}
//           size="120px"
//           thickness="10px"
//           color={ringColor}
//           trackColor="gray.200"
//           capIsRound
//         >
//           <CircularProgressLabel
//             fontSize={{ base: 'xl', md: '3xl' }}
//             fontWeight="bold"
//             color={ringColor}
//             textAlign="center"
//           >
//             {`${Math.round(bmi)}`}<br />
//             {riskMessage}
//           </CircularProgressLabel>
//         </CircularProgress>
//       </Box>

//       <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold" color="gray.700" textAlign="center">
//         BMI Risk Assessment
//       </Text>
//     </VStack>
//   );
// };

import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, CircularProgressLabel, Text, VStack } from '@chakra-ui/react';

export const Riskfactor = ({ max = 100, risk = 0 }) => {
  // Calculate the percentage for the progress ring
  const percentage = (risk / max) * 100;

  // Determine the ring color and risk message based on the value
  let ringColor;
  let riskMessage;

  if (risk <= 20) {
    ringColor = 'green.400';
    riskMessage = 'Good';
  } else if (risk > 20 && risk <= 60) {
    ringColor = 'blue.400';
    riskMessage = 'Moderate';
  } else {
    ringColor = 'red.400';
    riskMessage = 'High Risk';
  }

  return (
    <VStack spacing={4} align='center'>
      <CircularProgress
        value={percentage}
        size="250px"
        thickness="8px"
        color={ringColor}
        trackColor="grey.200"
        capIsRound
      >
        <CircularProgressLabel
          fontSize='2xl'
          fontWeight="bold"
          color={ringColor}
        >
          {`${risk}`}
        </CircularProgressLabel>
      </CircularProgress>
      <Text fontSize='lg' fontWeight="semibold" color={'blue'}>
        {riskMessage}
      </Text>
    </VStack>
  );
};
