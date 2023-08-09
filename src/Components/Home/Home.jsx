import React from "react";
import { Box, Button, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

const Home = () => {
    const isLargerThanMD = useBreakpointValue({ base: false, md: true });

    return (
        <Box>
            {isLargerThanMD ? (
                <Flex direction="row-reverse" alignItems="center" minHeight={'100vh'} bg="black" color="white">
                    <Box width="40vw" height="60vw" boxShadow="2xl" borderRadius="xl" overflow="hidden">
                        <Image
                            src="https://c1.wallpaperflare.com/preview/261/112/875/dark-people-kid-boy.jpg"
                            maxWidth="100%"
                            maxHeight="100%"
                            objectFit="cover"
                        />
                    </Box>
                    <Box>
                        <Text fontSize="md" fontStyle="italic" pb="20">
                            We Help{" "}
                            <Text as="span" color="#FFF7B2">
                                People
                            </Text>{" "}
                            to get what they{" "}
                            <Text as="span" color="#FFF7B2">
                                Deserve
                            </Text>
                        </Text>
                        <Heading size="2xl" mb={4}>
                            Domestic Worker's Life{" "}
                            <Text as="span" color="#FFF7B2">
                                Matter
                            </Text>
                        </Heading>
                        <Text mb={6} maxWidth="50ch">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </Text>
                        <Button margin={'1.5'} colorScheme="yellow" variant="solid" _hover={{ color: "white" }}>
                            Tutorial
                        </Button>
                    </Box>
                </Flex>
            ) : (
                <Flex direction="column" alignItems="center" justifyContent="center" minHeight={'100vh'} bg="black" color="white">
                    <Box maxWidth="md" overflow="hidden">
                        <Image
                            src="https://images.pexels.com/photos/90764/man-studio-portrait-light-90764.jpeg?cs=srgb&dl=pexels-pixabay-90764.jpg&fm=jpg"
                            width="100%"
                            height="100%"
                            objectFit="cover"
                        />
                    </Box>
                    <Box maxWidth="md" textAlign="center">
                        <Text fontSize="md" fontStyle="italic" >
                            We Help{" "}
                            <Text as="span" color="#FFF7B2">
                                People
                            </Text>{" "}
                            to get what they{" "}
                            <Text as="span" color="#FFF7B2">
                                Deserve
                            </Text>
                        </Text>
                        <Heading size="2xl" mb={1}>
                            Domestic Worker's Life{" "}
                            <Text as="span" color="#FFF7B2">
                                Matter
                            </Text>
                        </Heading>
                        <Text mb={6}>
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </Text>
                        <Button margin={'1.5'} colorScheme="yellow" variant="solid" _hover={{ color: "white" }}>
                            Tutorial
                        </Button>
                    </Box>

                </Flex>
            )}
        </Box>
    );
};

export default Home;
