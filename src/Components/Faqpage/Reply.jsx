import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  Input, 
  Button,
  useColorModeValue
} from "@chakra-ui/react";

const Reply = () => {
    const [question, setQuestion] = useState({ replies: [] });
    const [newReply, setNewReply] = useState("");
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/view/${id}`)
            .then(response => {
                setQuestion(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    const handleNewReplyChange = (event) => {
        setNewReply(event.target.value);
    }

    const handleReplySubmit = (event) => {
        event.preventDefault();

        axios.post(`https://enliven-the-ngo-website-ixmk.vercel.app/view/${id}/replies`, { reply: newReply })
            .then(response => {
                setQuestion(prevQuestion => ({
                    ...prevQuestion,
                    replies: [...prevQuestion.replies, response.data]
                }));
                setNewReply("");
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
                <Heading mb={4}>{question.title}</Heading>
                <VStack spacing={3} align="start" mb={6}>
                    {question.replies.map(reply => (
                        <Text key={reply._id}>{reply.reply}</Text>
                    ))}
                </VStack>

                <VStack as="form" onSubmit={handleReplySubmit} spacing={4} align="stretch">
                    <Input 
                        placeholder="Write a reply..." 
                        value={newReply} 
                        onChange={handleNewReplyChange}
                    />
                    <Button colorScheme="yellow" type="submit">Submit Reply</Button>
                </VStack>
            </Box>
        </Box>
    )
}

export default Reply;
