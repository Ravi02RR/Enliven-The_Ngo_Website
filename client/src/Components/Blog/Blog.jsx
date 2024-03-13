import React, { useState, useEffect } from 'react';
import { Box, Image, Text, Heading, Container, Fade, Button, SimpleGrid, Input, Flex, useColorMode } from "@chakra-ui/react";
import _debounce from 'lodash/debounce';
import Loader from './Loader';

const Blog = () => {
    const { colorMode } = useColorMode();
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 8;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=domestic%20workers&sortBy=popularity&apiKey=c2e768b3e75b4aa2a0405e7faace49dd');
                const data = await response.json();
                if (data.status === 'ok') {
                    setArticles(data.articles);
                    setFilteredArticles(data.articles);
                } else {
                    setError(data.message);
                }
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {

        const debouncedFilter = _debounce(filterArticles, 300);
        debouncedFilter();
        return debouncedFilter.cancel;
    }, [searchTerm]);

    const filterArticles = () => {
        const filtered = articles.filter(article =>
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredArticles(filtered);
    };

    const displayArticles = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const displayedArticles = filteredArticles.slice(startIndex, endIndex);

        return (
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
                {displayedArticles.map(article => (
                    <Fade in={true} key={article.url}>
                        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" h="100%">
                            <Image src={article.urlToImage} alt="news" h="200px" objectFit="cover" />
                            <Box p="4">
                                <Text fontSize="sm" color="gray.500">{new Date(article.publishedAt).toLocaleDateString()} / {article.source.name}</Text>
                                <Heading as="h3" size="md" mt="2" mb="4" lineHeight="short">{article.title}</Heading>
                                <Text fontSize="sm" color="gray.700" mb="4">{article.description}</Text>
                                <Button as="a" href={article.url} target="_blank" variant="link" colorScheme={colorMode === "light" ? "blue" : "teal"}>Read More</Button>
                            </Box>
                        </Box>
                    </Fade>
                ))}
            </SimpleGrid>
        );
    };

    const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

    const updatePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginationButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <Button key={i} onClick={() => updatePage(i)} variant={i === currentPage ? 'solid' : 'outline'} size="sm" colorScheme={colorMode === "light" ? "blue" : "teal"}>
                    {i}
                </Button>
            );
        }
        return buttons;
    };

    return (
        <Container maxW="container.xl" py={12}>
            <Heading mb={6}>Latest News</Heading>
            <Input
                mb={4}
                placeholder="Search articles..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            {isLoading && <Loader />} 
            {error && <div>Error: {error}</div>}
            {!isLoading && !error && (
                <>
                    {displayArticles()}
                    <Flex justify="center" mt={6}>
                        {paginationButtons()}
                    </Flex>
                </>
            )}
        </Container>
    );
};

export default Blog;
