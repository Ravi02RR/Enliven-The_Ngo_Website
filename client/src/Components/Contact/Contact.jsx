import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  Text,
  VStack,
  Heading,
  useToast,
  useColorModeValue
} from "@chakra-ui/react";
import axios from 'axios';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const toast = useToast();

  
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const boxColor = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("black", "white");

  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  }
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://enliven-the-ngo-website.onrender.com/contact', contactInfo);
      toast({
        title: "Success.",
        description: "Message sent successfully!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setContactInfo({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (err) {
      toast({
        title: "Error.",
        description: "Failed to send the message. Please try again.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <Box display={'flex'} justifyContent="center" alignItems="center" minHeight="100vh" p={4} bg={bgColor}>
      <Box width={["90%", "80%"]} bg={boxColor} color={textColor} p={5} rounded="md" boxShadow="lg">
        <VStack spacing={5}>
          <Box>
            <Heading mb={1}>Contact Us</Heading>
            <Text fontSize="xl" fontWeight="bold">
              YOUR IDEA <Text as="span" color="yellow.400">IS OUR</Text> SOLUTION
            </Text>
          </Box>

          <VStack as="form" onSubmit={handleSubmit} spacing={4} align="stretch" width="100%">
            <Input
              variant="filled"
              placeholder="Full Name"
              type="text"
              name="fullName"
              value={contactInfo.fullName}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="Email"
              type="email"
              name="email"
              value={contactInfo.email}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="Phone"
              type="tel"
              name="phone"
              value={contactInfo.phone}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="Message"
              type="text"
              name="message"
              value={contactInfo.message}
              onChange={handleChange}
            />
            <Button colorScheme="yellow" type="submit" size="lg">Send Message</Button>
          </VStack>
        </VStack>
      </Box>
    </Box>
  )
}

export default Contact;
