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
const Array1=[
    {
        icon: RiMessage2Line,
        title: "Ask a Question",
        text: "Get legal answers from lawyers. It's quick, easy, and anonymous!",
        link: "/question",
        buttonLabel: "Ask Here"
    },
    {
        icon: RiPhoneLine,
        title: "Talk to a Lawyer",
        text: "Personally talk to a lawyer about your problems.",
        link: "tel:+01123381023",
        buttonLabel: "Call 011-23381023"
    },
    {
        icon: RiUser3Line,
        title: "Hire a Lawyer",
        text: "Get a reputed lawyer to sort out your problems.",
        link: "https://nalsa.gov.in/services/legal-aid/legal-services",
        buttonLabel: "Ask Here"
    }
]


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
                justify={{ base: "center", md: "space-around" }}
                align="center"
                direction={{ base: "column", md: "row" }}
                mt={'10'}
                mb="5"
                mx={{ base: "2", md: "20", lg: "40" }}
                spacing={{ base: 5, md: 10 }}
            >

               
                {Array1.map((card, idx) => (
                    <LinkBox
                        key={idx}
                        marginBottom={{ base: '5', md: '0' }}
                        as="article"
                        w={{ base: "90%", md: "sm" }}
                        h={{ md: "280px" }}
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
                        <VStack align="start" spacing="4" justifyContent="center" h="100%">
                            <Icon as={card.icon} w={8} h={8} />
                            <Heading size="md">{card.title}</Heading>
                            <Text fontSize="sm">{card.text}</Text>
                            <LinkOverlay as={Link} to={card.link}>
                                <Button colorScheme="blue" variant="outline" w="full">{card.buttonLabel}</Button>
                            </LinkOverlay>
                        </VStack>
                    </LinkBox>
                ))}
            </Flex>
        </Box>
    );
};

export default Legal;
