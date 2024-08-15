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
  
  export const Home = () => {
    const nav = useNavigate()   
    //signout function
    const gosignout = () => {
        sessionStorage?.removeItem('auth')
        nav('/signin')
      }
      const gohome = () => {
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
            <Text fontSize="md" mb={6}>Mobile Number: {auth.Mnum}</Text>
            <Text fontSize="md" mb={6}>Email ID: {auth.Email}</Text>
            <Text fontSize="md" mb={6}>Password: {auth.Pwd}</Text>
            <Text fontSize="md" mb={6}>Gender: {auth.Gen}</Text>
          </CardBody>
          <CardFooter>
            <VStack spacing={4} w="100%">
              <Button variant="outline" colorScheme="red" w="full" onClick={gosignout}>Sign Out</Button>
            </VStack>
            <VStack spacing={4} w="100%">
              <Button variant="outline" colorScheme="" w="full" onClick={gohome}>Home</Button>
            </VStack>
          </CardFooter>
        </Card>
      </Box>
    );
  };