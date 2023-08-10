import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";

const New = () => {
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('enliven-the-ngo-website-ixmk.vercel.app', { title })
            .then(() => {
                navigate("/question");
            })
            .catch(error => {
                console.error(error);
            });
    }

    const bgColor = useColorModeValue("white", "gray.800");
    const cardBorderColor = useColorModeValue("gray.200", "gray.700");

    return (
        <Box p={4} display="flex" flexDirection="column" alignItems="center" bg={bgColor} minH="100vh">
            <Box 
                width={["100%", "80%", "60%"]} 
                bg={bgColor}
                p={6}
                boxShadow="lg"
                borderRadius="md"
                border="1px"
                borderColor={cardBorderColor}
            >
                <VStack spacing={4}>
                    <Heading mb={4}>Post Your Question Here...</Heading>
                    <FormControl as="form" onSubmit={handleSubmit}>
                        <FormLabel htmlFor="question-title">Title</FormLabel>
                        <Input  isRequired
                            id="question-title"
                            value={title} 
                            onChange={handleTitleChange} 
                            placeholder="Enter title" 
                            mb={4}
                        />
                        <Button colorScheme="yellow" type="submit" size="lg" width="full">Submit</Button>
                    </FormControl>
                </VStack>
            </Box>
        </Box>
    )
}

export default New;
