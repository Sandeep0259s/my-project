//admin
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Menu,
  MenuButton,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { api } from "../actions/api"; // Update this path based on your project structure
import { useNavigate } from "react-router-dom";

export function AdminPage() {
  const nav = useNavigate();
  const toast = useToast();
  const [data, setData] = useState([]);
  const [userDetails, setUserDetails] = useState({
    firstname: "John",
    lastname: "Doe",
    age: 30,
    mobilenumber: "+1234567890",
  });

  const fetchData = async () => {
    try {
      const res = await axios.post(api + "/admin");
      setData(res?.data);
    } catch (e) {
      toast({
        title: "Error fetching data.",
        description: "There was an error while fetching the data.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const gosignout = () => {
    nav("/signin");
  };
  
  const gohome= () => {
    nav("/landing");
  };

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
        <Text fontSize="2xl" fontWeight="bold" mr={3}>
          Odyssey Admin Panel
        </Text>

        <Menu>
          <MenuButton
            as={Button}
            colorScheme="blue"
            variant="outline"
            border="2px solid"
            onClick={gosignout}
          >
            Sign Out
          </MenuButton>
          <MenuButton
            as={Button}
            colorScheme="blue"
            variant="outline"
            border="2px solid"
            onClick={gohome}
          >
            Home
          </MenuButton>
        </Menu>
      </Flex>

      {/* Main Content Area */}
      <Box p={5}>
        <Flex direction={{ base: "column", md: "row" }} gap={2}>
          <Box flex="3">
            <Box maxW="1200px" mx="auto">
              <Flex direction="column" gap={6}>
                {data?.map((val) => (
                  <Box
                    key={val._id} // Ensure to use a unique key if available
                    bg="white"
                    boxShadow="md"
                    borderRadius="md"
                    overflow="hidden"
                    transition="transform 0.2s ease-in-out" // Add transition for smooth effect
                    _hover={{
                      transform: "scale(1.02)", // Slightly scale up on hover
                      boxShadow: "lg", // Optional: make shadow larger on hover
                    }}
                  >
                    <Flex direction={{ base: "column", md: "row" }} gap={2}>
                      <Image
                        src={val.url}
                        width="200px" // Adjust width based on screen size
                        height="200px" // Fixed height to maintain aspect ratio
                        objectFit="cover"
                        alt={val.title}
                      />
                      <Box p={4} flex="1">
                        <Text fontSize="2xl" fontWeight="bold" color="black">
                          {val.title}
                        </Text>
                        <Flex mt={2} mb={2} align="center">
                          <Text fontSize="lg" fontWeight="bold" color="#028391">
                            INR {val.cost}
                          </Text>
                          
                          <Text fontSize="lg" fontWeight="bold" color="gray.600" ml={2}> {/* Decreased margin-left */}
                            Status: {val.status}
                          </Text>
                        </Flex>
                      </Box>
                      <Box p={4} flex="2"> {/* Adjusted padding */}
                        <VStack align="start">
                          <Text fontSize="2xl" fontWeight="bold">
                            hi
                          </Text>
                          <Text fontSize="lg">Age: {userDetails.age}</Text>
                          <Text fontSize="lg">Mobile: {userDetails.mobilenumber}</Text>
                        </VStack>
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
