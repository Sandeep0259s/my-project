import React from "react";
import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
  Link,
  Button,
  Stack,
  Input,
  Select,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

export function LandingPage() {
  return (
    <Box bg="#f8f9fa" minH="100vh">
      {/* Header */}
      <Flex
        bg="white"
        color="black"
        p={4}
        justifyContent="space-between"
        alignItems="center"
        boxShadow="md"
      >
        <Text fontSize="2xl" fontWeight="bold">
          Thrillophilia
        </Text>
        <Flex>
          <Input placeholder="Search for adventures..." bg="white" mr={2}   />
          <Button colorScheme="teal">Search</Button>
        </Flex>
      </Flex>

      {/* Breadcrumb */}
      <Breadcrumb p={5} separator=">">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">India</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Adventure</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* Main Content Area */}
      <Box p={5}>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Adventure Activities in India
          </Text>
          <Select placeholder="Sort by" width="200px">
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
            <option value="price_low_high">Price: Low to High</option>
            <option value="price_high_low">Price: High to Low</option>
          </Select>
        </Flex>

        {/* Adventure Grid */}
        <Box maxW="1200px" mx="auto"> {/* Center the grid and limit its width */}
          <Grid templateColumns="repeat(4, 1fr)" gap={5}>
            {Array(8)
              .fill("")
              .map((_, index) => (
                <Box
                  key={index}
                  bg="white"
                  boxShadow="md"
                  borderRadius="md"
                  overflow="hidden"
                  maxW="300px" // Set max width to match the placeholder image width
                >
                  <Image
                    src={`https://via.placeholder.com/300?text=Adventure+${index + 1}`}
                    alt={`Adventure ${index + 1}`}
                  />
                  <Box p={4}>
                    <Text fontWeight="bold">Adventure Name</Text>
                    <Text fontSize="sm" color="gray.600">
                      Location
                    </Text>
                    <Text mt={2} fontSize="sm" color="gray.500">
                      Duration: 3 Days
                    </Text>
                    <Text mt={2} fontSize="lg" color="teal.500">
                      $100
                    </Text>
                    <Button colorScheme="teal" mt={4}>
                      Book Now
                    </Button>
                  </Box>
                </Box>
              ))}
          </Grid>
        </Box>
      </Box>

      {/* Footer */}
      <Box bg="#343a40" color="white" p={10} mt={10}>
        <Stack spacing={4} direction="row" justify="space-between">
          <Box>
            <Text fontWeight="bold">Company</Text>
            <Link href="#">About Us</Link>
            <Link href="#">Contact</Link>
          </Box>
          <Box>
            <Text fontWeight="bold">Help</Text>
            <Link href="#">Customer Service</Link>
            <Link href="#">FAQs</Link>
          </Box>
          <Box>
            <Text fontWeight="bold">Follow Us</Text>
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}


// import React from "react";
// import {
//   Box,
//   Flex,
//   Grid,
//   Image,
//   Text,
//   Link,
//   Button,
//   Stack,
//   Input,
//   Select,
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
// } from "@chakra-ui/react";

// export function LandingPage() {
//   return (
//     <Box bg="#f8f9fa" minH="100vh">
//       {/* Header */}
//       <Flex
//         bg="white"
//         color="black"
//         p={4}
//         justifyContent="space-between"
//         alignItems="center"
//         boxShadow="md"
//       >
//         <Text fontSize="2xl" fontWeight="bold">
//           Thrillophilia
//         </Text>
//         <Flex>
//           <Input placeholder="Search for adventures..." bg="white" mr={2} />
//           <Button colorScheme="teal">Search</Button>
//         </Flex>
//       </Flex>

//       {/* Breadcrumb */}
//       <Breadcrumb p={5} separator=">">
//         <BreadcrumbItem>
//           <BreadcrumbLink href="#">Home</BreadcrumbLink>
//         </BreadcrumbItem>
//         <BreadcrumbItem>
//           <BreadcrumbLink href="#">India</BreadcrumbLink>
//         </BreadcrumbItem>
//         <BreadcrumbItem isCurrentPage>
//           <BreadcrumbLink href="#">Adventure</BreadcrumbLink>
//         </BreadcrumbItem>
//       </Breadcrumb>

//       {/* Main Content Area */}
//       <Box p={5}>
//         <Flex justifyContent="space-between" alignItems="center" mb={4}>
//           <Text fontSize="2xl" fontWeight="bold">
//             Adventure Activities in India
//           </Text>
//           <Select placeholder="Sort by" width="200px">
//             <option value="popularity">Popularity</option>
//             <option value="rating">Rating</option>
//             <option value="price_low_high">Price: Low to High</option>
//             <option value="price_high_low">Price: High to Low</option>
//           </Select>
//         </Flex>

//         {/* Adventure Grid */}
//         <Grid templateColumns="repeat(3, 1fr)" gap={6}>
//           {Array(9)
//             .fill("")
//             .map((_, index) => (
//               <Box
//                 key={index}
//                 bg="white"
//                 boxShadow="md"
//                 borderRadius="md"
//                 overflow="hidden"
//               >
//                 <Image
//                   src={`https://via.placeholder.com/300?text=Adventure+${index + 1}`}
//                   alt={`Adventure ${index + 1}`}
//                 />
//                 <Box p={4}>
//                   <Text fontWeight="bold">Adventure Name</Text>
//                   <Text fontSize="sm" color="gray.600">
//                     Location
//                   </Text>
//                   <Text mt={2} fontSize="lg" color="teal.500">
//                     $100
//                   </Text>
//                   <Button colorScheme="teal" mt={4}>
//                     Book Now
//                   </Button>
//                 </Box>
//               </Box>
//             ))}
//         </Grid>
//       </Box>

//       {/* Footer */}
//       <Box bg="#343a40" color="white" p={10} mt={10}>
//         <Stack spacing={4} direction="row" justify="space-between">
//           <Box>
//             <Text fontWeight="bold">Company</Text>
//             <Link href="#">About Us</Link>
//             <Link href="#">Contact</Link>
//           </Box>
//           <Box>
//             <Text fontWeight="bold">Help</Text>
//             <Link href="#">Customer Service</Link>
//             <Link href="#">FAQs</Link>
//           </Box>
//           <Box>
//             <Text fontWeight="bold">Follow Us</Text>
//             <Link href="#">Facebook</Link>
//             <Link href="#">Instagram</Link>
//           </Box>
//         </Stack>
//       </Box>
//     </Box>
//   );
// }


// import React from "react";
// import { 
//   Box, 
//   Flex, 
//   Grid, 
//   Image, 
//   Text, 
//   Link, 
//   Button, 
//   Stack, 
//   Input, 
//   Select 
// } from "@chakra-ui/react";

// export function LandingPage() {
//   return (
//     <Box bg="#f8f9fa" minH="100vh">
      
//       {/* Header */}
//       <Flex 
//         bg="#007bff" 
//         color="white" 
//         p={4} 
//         justifyContent="space-between" 
//         alignItems="center"
//       >
//         <Text fontSize="2xl" fontWeight="bold">Thrillophilia</Text>
//         <Flex>
//           <Input 
//             placeholder="Search for adventures..." 
//             bg="white" 
//             color="black" 
//             mr={2} 
//           />
//           <Button colorScheme="teal">Search</Button>
//         </Flex>
//       </Flex>
      
//       {/* Main Content Area */}
//       <Box p={5}>
//         <Flex justifyContent="space-between" alignItems="center" mb={4}>
//           <Text fontSize="xl" fontWeight="bold">Adventure Activities in India</Text>
//           <Select placeholder="Sort by" width="200px">
//             <option value="popularity">Popularity</option>
//             <option value="rating">Rating</option>
//             <option value="price_low_high">Price: Low to High</option>
//             <option value="price_high_low">Price: High to Low</option>
//           </Select>
//         </Flex>
        
//         {/* Adventure Grid */}
//         <Grid templateColumns="repeat(3, 1fr)" gap={6}>
//           {Array(9).fill("").map((_, index) => (
//             <Box key={index} bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
//               <Image 
//                 src={`https://via.placeholder.com/300?text=Adventure+${index+1}`} 
//                 alt={`Adventure ${index+1}`} 
//               />
//               <Box p={4}>
//                 <Text fontWeight="bold">Adventure Name</Text>
//                 <Text fontSize="sm" color="gray.600">Location</Text>
//                 <Text mt={2} fontSize="lg" color="teal.500">$100</Text>
//                 <Button colorScheme="teal" mt={4}>Book Now</Button>
//               </Box>
//             </Box>
//           ))}
//         </Grid>
//       </Box>

//       {/* Footer */}
//       <Box bg="#343a40" color="white" p={10} mt={10}>
//         <Stack spacing={4} direction="row" justify="space-between">
//           <Box>
//             <Text fontWeight="bold">Company</Text>
//             <Link href="#">About Us</Link>
//             <Link href="#">Contact</Link>
//           </Box>
//           <Box>
//             <Text fontWeight="bold">Help</Text>
//             <Link href="#">Customer Service</Link>
//             <Link href="#">FAQs</Link>
//           </Box>
//           <Box>
//             <Text fontWeight="bold">Follow Us</Text>
//             <Link href="#">Facebook</Link>
//             <Link href="#">Instagram</Link>
//           </Box>
//         </Stack>
//       </Box>
//     </Box>
//   );
// }


// import React from "react";
// import { Box, Flex, Grid, Image, Text, Link, Button, Stack } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";
// import { MdAddShoppingCart } from "react-icons/md";

// export function LandingPage() {
//   return (
//     <Box>
//       {/* Navigation Bar */}
//       <Flex bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
//         <Box>
//           <Text fontSize="2xl" fontWeight="bold">
//             MyStore
//           </Text>
//         </Box>
//         <Flex>
//           <Button variant="ghost" leftIcon={<SearchIcon />} mr={2}>
//             Search
//           </Button>
//           <Button variant="ghost" leftIcon={<MdAddShoppingCart />}>
//             Cart
//           </Button>
//         </Flex>
//       </Flex>

//       {/* Banner Section */}
//       <Box bg="gray.100" p={10}>
//         <Image src="https://via.placeholder.com/1200x400" alt="Banner Image" borderRadius="md" />
//       </Box>

//       {/* Product Grid */}
//       <Box p={5}>
//         <Text fontSize="2xl" mb={4}>
//           Featured Products
//         </Text>
//         <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
//           {Array(6)
//             .fill("")
//             .map((_, index) => (
//               <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
//                 <Image src="https://via.placeholder.com/300" alt="Product Image" />
//                 <Box p={5}>
//                   <Text fontWeight="bold" fontSize="lg">
//                     Product Name
//                   </Text>
//                   <Text mt={2}>$100.00</Text>
//                   <Button colorScheme="blue" mt={4} width="full">
//                     Add to Cart
//                   </Button>
//                 </Box>
//               </Box>
//             ))}
//         </Grid>
//       </Box>

//       {/* Footer */}
//       <Box bg="gray.700" color="white" p={10}>
//         <Stack spacing={4} direction="row" justify="space-between">
//           <Box>
//             <Text fontWeight="bold">Company</Text>
//             <Link href="#">About Us</Link>
//             <Link href="#">Contact</Link>
//           </Box>
//           <Box>
//             <Text fontWeight="bold">Help</Text>
//             <Link href="#">Customer Service</Link>
//             <Link href="#">Returns</Link>
//           </Box>
//           <Box>
//             <Text fontWeight="bold">Follow Us</Text>
//             <Link href="#">Facebook</Link>
//             <Link href="#">Twitter</Link>
//           </Box>
//         </Stack>
//       </Box>
//     </Box>
//   );
// }



// import React from "react";
// import { 
//   Box, 
//   Flex, 
//   Grid, 
//   Image, 
//   Text, 
//   Link, 
//   Button, 
//   Stack, 
//   VStack, 
//   HStack, 
//   Checkbox, 
//   RadioGroup, 
//   Radio 
// } from "@chakra-ui/react";
// import { SearchIcon} from "@chakra-ui/icons";
// import { MdAddShoppingCart } from "react-icons/md";

// export function LandingPage() {
//   return (
//     <Box>
//       {/* Navigation Bar */}
//       <Flex bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
//         <Box>
//           <Text fontSize="2xl" fontWeight="bold">
//             MyStore
//           </Text>
//         </Box>
//         <Flex>
//           <Button variant="ghost" leftIcon={<SearchIcon />} mr={2}>
//             Search
//           </Button>
//           <Button variant="ghost" leftIcon={<MdAddShoppingCart />}>
//             Cart
//           </Button>
//         </Flex>
//       </Flex>

//       {/* Main Content Area */}
//       <Flex>
//         {/* Side Navigation Bar */}
//         <Box width="250px" bg="gray.100" p={5}>
//           <Text fontSize="xl" mb={4}>Filters</Text>
//           <Box mb={6}>
//             <Text fontWeight="bold" mb={2}>Price</Text>
//             <VStack align="start">
//               <Checkbox>Under $25</Checkbox>
//               <Checkbox>$25 to $50</Checkbox>
//               <Checkbox>$50 to $100</Checkbox>
//               <Checkbox>$100 to $200</Checkbox>
//               <Checkbox>Above $200</Checkbox>
//             </VStack>
//           </Box>
//           <Box mb={6}>
//             <Text fontWeight="bold" mb={2}>Sort By</Text>
//             <RadioGroup defaultValue="lowToHigh">
//               <VStack align="start">
//                 <Radio value="lowToHigh">Price: Low to High</Radio>
//                 <Radio value="highToLow">Price: High to Low</Radio>
//                 <Radio value="popularity">Popularity</Radio>
//                 <Radio value="newArrivals">New Arrivals</Radio>
//               </VStack>
//             </RadioGroup>
//           </Box>
//         </Box>

//         {/* Product Grid */}
//         <Box flex="1" p={5}>
//           <Text fontSize="2xl" mb={4}>
//             Featured Products
//           </Text>
//           <Grid templateColumns="repeat(1, 1fr)" gap={6}>
//             {Array(6)
//               .fill("")
//               .map((_, index) => (
//                 <Flex 
//                   key={index} 
//                   borderWidth="1px" 
//                   borderRadius="lg" 
//                   overflow="hidden"
//                   alignItems="center"
//                   p={4}
//                 >
//                   <Image 
//                     src="https://via.placeholder.com/150" 
//                     alt="Product Image" 
//                     boxSize="150px" 
//                     objectFit="cover" 
//                     mr={4} 
//                   />
//                   <Box>
//                     <Text fontWeight="bold" fontSize="lg">
//                       Product Name
//                     </Text>
//                     <Text mt={2}>$100.00</Text>
//                     <Button colorScheme="blue" mt={4}>
//                       Add to Cart
//                     </Button>
//                   </Box>
//                 </Flex>
//               ))}
//           </Grid>
//         </Box>
//       </Flex>

//       {/* Footer */}
//       <Box bg="gray.700" color="white" p={10} mt={10}>
//         <Stack spacing={4} direction="row" justify="space-between">
//           <Box>
//             <Text fontWeight="bold">Company</Text>
//             <Link href="#">About Us</Link>
//             <Link href="#">Contact</Link>
//           </Box>
//           <Box>
//             <Text fontWeight="bold">Help</Text>
//             <Link href="#">Customer Service</Link>
//             <Link href="#">Returns</Link>
//           </Box>
//           <Box>
//             <Text fontWeight="bold">Follow Us</Text>
//             <Link href="#">Facebook</Link>
//             <Link href="#">Twitter</Link>
//           </Box>
//         </Stack>
//       </Box>
//     </Box>
//   );
// }

// import React from "react";
// import { 
//   Box, 
//   Flex, 
//   Grid, 
//   Image, 
//   Text, 
//   Link, 
//   Button, 
//   Stack, 
//   VStack, 
//   Checkbox, 
//   RadioGroup, 
//   Radio 
// } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";
// import { MdAddShoppingCart } from "react-icons/md";

// export function LandingPage() {
//   return (
//     <Box bg="#f8f9fa" minH="100vh" p={4}>
//       {/* Navigation Bar */}
//       <Flex 
//         bg="rgba(255, 255, 255, 0.8)" 
//         backdropFilter="blur(10px)" 
//         boxShadow="lg" 
//         color="white" 
//         p={4} 
//         justifyContent="space-between" 
//         alignItems="center" 
//         borderRadius="lg"
//       >
//         <Box>
//           <Text fontSize="2xl" fontWeight="bold" color="#007bff">
//             MyStore
//           </Text>
//         </Box>
//         <Flex>
//           <Button 
//             variant="ghost" 
//             leftIcon={<SearchIcon />} 
//             mr={2}
//             _hover={{ bg: "rgba(255, 255, 255, 0.3)" }}
//             color="#343a40"
//           >
//             Search
//           </Button>
//           <Button 
//             variant="ghost" 
//             leftIcon={<MdAddShoppingCart />}
//             _hover={{ bg: "rgba(255, 255, 255, 0.3)" }}
//             color="#343a40"
//           >
//             Cart
//           </Button>
//         </Flex>
//       </Flex>

//       {/* Main Content Area */}
//       <Flex mt={6}>
//         {/* Side Navigation Bar */}
//         <Box 
//           width="250px" 
//           bg="rgba(255, 255, 255, 0.8)" 
//           backdropFilter="blur(10px)" 
//           boxShadow="lg" 
//           p={5} 
//           borderRadius="lg"
//         >
//           <Text fontSize="xl" mb={4} color="#343a40">Filters</Text>
//           <Box mb={6}>
//             <Text fontWeight="bold" mb={2} color="#343a40">Price</Text>
//             <VStack align="start">
//               <Checkbox colorScheme="blue">Under $25</Checkbox>
//               <Checkbox colorScheme="blue">$25 to $50</Checkbox>
//               <Checkbox colorScheme="blue">$50 to $100</Checkbox>
//               <Checkbox colorScheme="blue">$100 to $200</Checkbox>
//               <Checkbox colorScheme="blue">Above $200</Checkbox>
//             </VStack>
//           </Box>
//           <Box mb={6}>
//             <Text fontWeight="bold" mb={2} color="#343a40">Sort By</Text>
//             <RadioGroup defaultValue="lowToHigh">
//               <VStack align="start">
//                 <Radio value="lowToHigh" colorScheme="blue">Price: Low to High</Radio>
//                 <Radio value="highToLow" colorScheme="blue">Price: High to Low</Radio>
//                 <Radio value="popularity" colorScheme="blue">Popularity</Radio>
//                 <Radio value="newArrivals" colorScheme="blue">New Arrivals</Radio>
//               </VStack>
//             </RadioGroup>
//           </Box>
//         </Box>

//         {/* Product Grid */}
//         <Box flex="1" p={5}>
//           <Text fontSize="2xl" mb={4} color="#343a40">
//             Featured Products
//           </Text>
//           <Grid templateColumns="repeat(1, 1fr)" gap={6}>
//             {Array(6)
//               .fill("")
//               .map((_, index) => (
//                 <Flex 
//                   key={index} 
//                   bg="rgba(255, 255, 255, 0.8)" 
//                   backdropFilter="blur(10px)" 
//                   boxShadow="lg" 
//                   borderRadius="lg"
//                   overflow="hidden"
//                   alignItems="center"
//                   p={4}
//                 >
//                   <Image 
//                     src="https://via.placeholder.com/150" 
//                     alt="Product Image" 
//                     boxSize="150px" 
//                     objectFit="cover" 
//                     mr={4} 
//                     borderRadius="lg"
//                   />
//                   <Box>
//                     <Text fontWeight="bold" fontSize="lg" color="#343a40">
//                       Product Name
//                     </Text>
//                     <Text mt={2} color="#6c757d">$100.00</Text>
//                     <Button colorScheme="blue" mt={4}>
//                       Add to Cart
//                     </Button>
//                   </Box>
//                 </Flex>
//               ))}
//           </Grid>
//         </Box>
//       </Flex>

//       {/* Footer */}
//       <Box 
//         bg="rgba(255, 255, 255, 0.8)" 
//         backdropFilter="blur(10px)" 
//         color="white" 
//         p={10} 
//         mt={10}
//         borderRadius="lg"
//         boxShadow="lg"
//       >
//         <Stack spacing={4} direction="row" justify="space-between">
//           <Box>
//             <Text fontWeight="bold" color="#343a40">Company</Text>
//             <Link href="#" color="#6c757d">About Us</Link>
//             <Link href="#" color="#6c757d">Contact</Link>
//           </Box>
//           <Box>
//             <Text fontWeight="bold" color="#343a40">Help</Text>
//             <Link href="#" color="#6c757d">Customer Service</Link>
//             <Link href="#" color="#6c757d">Returns</Link>
//           </Box>
//           <Box>
//             <Text fontWeight="bold" color="#343a40">Follow Us</Text>
//             <Link href="#" color="#6c757d">Facebook</Link>
//             <Link href="#" color="#6c757d">Twitter</Link>
//           </Box>
//         </Stack>
//       </Box>
//     </Box>
//   );
// }
