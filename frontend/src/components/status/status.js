// import { 
//     Box, 
//     Flex, 
//     Heading, 
//     Text, 
//     Button, 
//     VStack, 
//     Card, 
//     CardBody, 
//     CardFooter,
//     Stack,
//     useToast
// } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// export const AcGe = () => {
//     const [status, setStatus] = useState(null);
//     const nav = useNavigate();
//     const toast = useToast();
    
//     // Function to handle status update and navigation
//     const handleStatusChange = (newStatus) => {
//         setStatus(newStatus);
//         sessionStorage.setItem('status', newStatus);
//         toast({
//             title: `Status ${newStatus}`,
//             description: `You have ${newStatus.toLowerCase()} the request.`,
//             status: newStatus === 'Accepted' ? 'success' : 'error',
//             duration: 5000,
//             isClosable: true,
//         });
//     };

//     const golanding = () => {
//         sessionStorage.removeItem('auth');
//         nav('/landing');
//     };

//     // Retrieve auth data from session storage
//     const auth = JSON.parse(sessionStorage?.auth || '{}');
    
//     return (
//         <Box 
//             display="flex" 
//             justifyContent="center" 
//             alignItems="center" 
//             minH="100vh" 
//             bg="gray.100"
//         >
//             <Card 
//                 bg="white" 
//                 borderRadius="md" 
//                 boxShadow="lg" 
//                 maxW="sm"
//                 minW="70vh"
//                 mx="auto"
//                 textAlign="center"
//             >
//                 <CardBody>
//                     <Heading textAlign="center" width="100%" mb={4}>Status Checking</Heading>
//                     <Text fontSize="md" mb={6}>Email ID: {auth.Email}</Text>
//                     {status && <Text fontSize="lg" color={status === 'Accepted' ? 'green.500' : 'red.500'} mb={4}>Status: {status}</Text>}
//                 </CardBody>
//                 <Stack direction='row' spacing={4} mb={4}>
//                     <Button 
//                         variant="outline" 
//                         colorScheme="green" 
//                         w="full" 
//                         onClick={() => handleStatusChange('Accepted')}
//                         isDisabled={status !== null}
//                     >
//                         Accept
//                     </Button>
//                     <Button 
//                         variant="outline" 
//                         colorScheme="red" 
//                         w="full" 
//                         onClick={() => handleStatusChange('Rejected')}
//                         isDisabled={status !== null}
//                     >
//                         Reject
//                     </Button>
//                 </Stack>

//                 <CardFooter>
//                     <VStack spacing={4} w="100%">
//                         <Button 
//                             variant="outline" 
//                             colorScheme="blue" 
//                             w="full" 
//                             onClick={golanding}
//                         >
//                             Go Home
//                         </Button>
//                     </VStack>
//                 </CardFooter>
//             </Card>
//         </Box>
//     );
// };
import { 
    Box, 
    Heading, 
    Text, 
    Button, 
    VStack, 
    Card, 
    CardBody, 
    CardFooter,
    Stack,
    useToast
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export const AcGe = () => {
    const [status, setStatus] = useState(null);
    const nav = useNavigate();
    const toast = useToast();
    
    // Function to handle status update and navigation
    const handleStatusChange = async (newStatus) => {
        setStatus(newStatus);
        sessionStorage.setItem('status', newStatus);

        try {
            // Send status to backend
            await axios.post('/status', {
                email: JSON.parse(sessionStorage?.auth || '{}').Email,
                status: newStatus
            });

            toast({
                title: `Status ${newStatus}`,
                description: `You have ${newStatus.toLowerCase()} the request.`,
                status: newStatus === 'Accepted' ? 'success' : 'error',
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: 'Error',
                description: 'There was an error updating the status.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const golanding = () => {
        sessionStorage.removeItem('auth');
        nav('/landing');
    };

    // Retrieve auth data from session storage
    const auth = JSON.parse(sessionStorage?.auth || '{}');
    
    return (
        <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            minH="100vh" 
            bg="gray.100"
        >
            <Card 
                bg="white" 
                borderRadius="md" 
                boxShadow="lg" 
                maxW="sm"
                minW="70vh"
                mx="auto"
                textAlign="center"
            >
                <CardBody>
                    <Heading textAlign="center" width="100%" mb={4}>Status Checking</Heading>
                    <Text fontSize="md" mb={6}>Email ID: {auth.Email}</Text>
                    {status && <Text fontSize="lg" color={status === 'Accepted' ? 'green.500' : 'red.500'} mb={4}>Status: {status}</Text>}
                </CardBody>
                <Stack direction='row' spacing={4} mb={4}>
                    <Button 
                        variant="outline" 
                        colorScheme="green" 
                        w="full" 
                        onClick={() => handleStatusChange('Accepted')}
                        isDisabled={status !== null}
                    >
                        Accept
                    </Button>
                    <Button 
                        variant="outline" 
                        colorScheme="red" 
                        w="full" 
                        onClick={() => handleStatusChange('Rejected')}
                        isDisabled={status !== null}
                    >
                        Reject
                    </Button>
                </Stack>

                <CardFooter>
                    <VStack spacing={4} w="100%">
                        <Button 
                            variant="outline" 
                            colorScheme="blue" 
                            w="full" 
                            onClick={golanding}
                        >
                            Go Home
                        </Button>
                    </VStack>
                </CardFooter>
            </Card>
        </Box>
    );
};
