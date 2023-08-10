import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Link,
  Button,
  useColorModeValue,
  VStack,
  Spacer
} from "@chakra-ui/react";

const Faqhome = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('https://enliven-the-ngo-website-ixmk-git-master-ravi02rr.vercel.app/')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const bgColor = useColorModeValue("white", "gray.800");
  const cardHoverShadow = "xl";
  const cardBg = useColorModeValue("gray.100", "gray.900");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Flex 
      direction="column" 
      alignItems="center" 
      bg={bgColor} 
      minHeight="100vh" 
      p={8}
    >
      <VStack 
        spacing={10} 
        w="full"
        maxWidth="800px" 
        alignItems="start"
      >
        {questions.map(question => (
          <Box 
            key={question._id} 
            p={5} 
            width="full"
            bg={cardBg}
            borderWidth={1} 
            borderColor={cardBorderColor}
            borderRadius="md" 
            boxShadow="md" 
            _hover={{ boxShadow: cardHoverShadow }}
          >
            <Heading size="md" mb={4}>{question.title}</Heading>
            <Link as={RouterLink} to={`/view/${question._id}`} color="yellow.500">Read More...</Link>
          </Box>
        ))}
        <Spacer />
        <Button 
          as={RouterLink} 
          to="/new" 
          colorScheme="yellow" 
          size="lg"
        >
          Post a Question
        </Button>
      </VStack>
    </Flex>
  )
}

export default Faqhome;
