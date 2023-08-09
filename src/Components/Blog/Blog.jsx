import React, { useState } from 'react';
import { Box, Image, Text, VStack, Heading, Container, Input, useColorModeValue, Fade } from "@chakra-ui/react";
import { Blogdata } from './Blogdata';

export function Card({ img, title, para }) {
    const textColor = useColorModeValue("gray.700", "gray.200");

    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="xl" p="6" bg={useColorModeValue("white", "gray.700")}>
            <Image minHeight={['sm',"lg"]} objectFit={'cover'} src={img} alt={title} />
            <VStack spacing={3} align="start">
                <Heading size="md" color={textColor}>{title}</Heading>
                <Text color={textColor}>{para}</Text>
            </VStack>
        </Box>
    );
}

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const textColor = useColorModeValue("gray.700", "gray.200");
    const inputBgColor = useColorModeValue("gray.100", "gray.600");

    const filteredData = Blogdata.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phrase.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (<>
        <Box width={'full'} background={'black'}>
            <Text padding={['1.5', '5']} color={'whitesmoke'} fontSize={'6xl'} fontFamily={'serif'}>Blogs</Text>
        </Box>
        <Container maxW="container.xl" py={12}>

            <Heading mb={6} color={textColor}>Latest News</Heading>
            <hr></hr>
            <Input
                mb={4}
                placeholder="Search for news..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                bg={inputBgColor}
            />
            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={6}>
                {filteredData.map(item => (
                    <Fade in={true} key={item.id}>
                        <Card img={item.theimg} title={item.title} para={item.phrase} />
                    </Fade>
                ))}
            </Box>
        </Container>
    </>

    );
}

export default Blog;
