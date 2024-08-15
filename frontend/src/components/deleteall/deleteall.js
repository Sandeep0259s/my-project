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
    useToast,
    Toast
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import axios from 'axios';
  import { api } from '../actions/api';
  import { useNavigate } from 'react-router-dom';
export const DeleteAll = () => {
    const toast = useToast()
  const Deleteall=async()=>{
          await axios.post(api+"/deleteall")
          .then((res)=>{
              if(res.data.message){

                  if (!toast.isActive('msg')) {
                  toast({ 
                      id:'msg',
                      title: 'Success',
                      description: ""  ,
                      position: "top",
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                    })
                  }

                  window.location.href = '/home'
              } else {
                  if (!toast.isActive('msg')) {
                      toast({
                          id:'msg',
                          title: 'Wrong Credentials',
                          description: ""  ,
                          position: "top",
                          status: 'error',
                          duration: 3000,
                          isClosable: false,
                        })
                      }
              }
          })
          .catch((e)=>console.log(e))
        }
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
            <Heading size="md" textAlign="center" mb={4}>Delete All Accounts</Heading>
          </CardHeader>
          <CardBody>
  
            <Button 
              colorScheme="red" 
              width="100%" 
              variant="solid" 
              onClick={Deleteall}
            >
              Delete Accounts
            </Button>
          </CardBody>
        </Card>
      </Box>
    );
}