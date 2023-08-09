import React from "react";
import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    VStack,
    SimpleGrid,
    Icon,
    LinkBox,
    LinkOverlay,
    useColorModeValue
} from "@chakra-ui/react";
import { RiMessage2Line, RiUser3Line, RiPhoneLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { questionsAndAnswers } from "./Legaldata";


const Legal = () => {
    const textColor = useColorModeValue("black", "white");
    const cardBgColor = useColorModeValue("white", "gray.700");
    const bg = useColorModeValue("gray.100", "gray.800");

    return (
        <Box bg={bg}>
            <Box width={'full'} background={'black'}>
                <Text padding={['1.5', '5']} color={'whitesmoke'} fontSize={'6xl'} fontFamily={'serif'}>Legal Advice</Text>
            </Box>
            <Box
                border={'1px'}
                borderRadius={'2xl'}
                p="5"
                my="5"
                mx={{ base: "5", md: "20", lg: "40" }}
                boxShadow={'dark-lg'}
                bg={cardBgColor}
            >
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    {questionsAndAnswers.map((qa, index) => (
                        <Box key={index} color={textColor}>
                            <Heading size={'sm'}>{qa.title}</Heading>
                            <Text fontSize={'small'} mt={'20px'}>
                                {qa.content}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
            <Flex
                justify="space-around"
                align="center"
                wrap="wrap"
                mt={'40'}
                mb="5"
                mx={{ base: "5", md: "20", lg: "40" }}
                spacing={10}
            >

                <LinkBox
                    as="article"
                    maxW="sm"
                    p="5"
                    borderWidth="1px"
                    rounded="md"
                    overflow="hidden"


                    bgPos="center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    _after={{
                        content: '""',
                        display: 'block',
                        h: 'full',
                        w: 'full',

                        position: 'absolute'
                    }}
                    color={textColor}

                    boxShadow={'dark-lg'}
                >
                    <VStack align="start">
                        <Box>
                            <Icon as={RiMessage2Line} w={8} h={8} />
                            <Heading size="md" my="2">Ask a Question</Heading>
                            <Text fontSize="sm">Get legal answers from lawyers. It's quick, easy, and anonymous!</Text>
                            <LinkOverlay as={Link} to={"/question"}>
                                <Button colorScheme="blue" variant="outline" w="full" mt="2">Ask Here</Button>
                            </LinkOverlay>
                        </Box>
                    </VStack>
                </LinkBox>
                <LinkBox
                    as="article"
                    maxW="sm"
                    p="5"
                    borderWidth="1px"
                    rounded="md"
                    overflow="hidden"

                    bgPos="center"
                    bgRepeat="no-repeat"
                    bgSize="cover"

                    _after={{
                        content: '""',
                        display: 'block',
                        h: 'full',
                        w: 'full',

                        position: 'absolute'
                    }}
                    color={textColor}

                    boxShadow={'dark-lg'}
                >
                    <VStack align="start">
                        <Box>
                            <Icon as={RiPhoneLine} w={8} h={8} />
                            <Heading size="md" my="2">Talk to a Lawyer</Heading>
                            <Text fontSize="sm">Personally talk to a lawyer about your problems.</Text>
                            <LinkOverlay href="tel:+01123381023">
                                <Button colorScheme="blue" variant="outline" w="full" mt="2">Call 011-23381023</Button>
                            </LinkOverlay>
                        </Box>

                    </VStack>
                </LinkBox>
                <LinkBox
                    as="article"
                    maxW="sm"
                    p="5"
                    borderWidth="1px"
                    rounded="md"
                    overflow="hidden"

                    bgPos="center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    _after={{
                        content: '""',
                        display: 'block',
                        h: 'full',
                        w: 'full',

                        position: 'absolute'
                    }}
                    color={textColor}

                    boxShadow={'dark-lg'}
                >
                    <VStack align="start">
                        <Icon as={RiUser3Line} w={8} h={8} />
                        <Box>
                            <Heading size="md" my="2">Hire a Lawyer</Heading>
                            <Text fontSize="sm">Get a reputated lawyer to sort out your problems.</Text>
                            <LinkOverlay as={Link} to={"https://nalsa.gov.in/services/legal-aid/legal-services"}>
                                <Button colorScheme="blue" variant="outline" w="full" mt="2">Ask Here</Button>
                            </LinkOverlay>
                        </Box>
                    </VStack>
                </LinkBox>



            </Flex>

        </Box>
    );
};

export default Legal;
