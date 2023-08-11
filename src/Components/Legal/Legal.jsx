import React, { useState } from "react";
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
import { motion } from 'framer-motion';
import Tour from "reactour";

const MotionVStack = motion(VStack);

const popInAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};
const speak = (message) => {
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(utterance);
    } else {
        console.error('Your browser does not support the Web Speech API');
    }
};
const Array1 = [
    {
        icon: RiMessage2Line,
        title: "Ask a Question",
        text: "Get legal answers from lawyers. It's quick, easy, and anonymous!",
        link: "/question",
        buttonLabel: "Ask Here",
        tourData: "tour-question"
    },
    {
        icon: RiPhoneLine,
        title: "Talk to a Lawyer",
        text: "Personally talk to a lawyer about your problems.",
        link: "tel:+01123381023",
        buttonLabel: "Call 011-23381023",
        tourData: "tour-call"
    },
    {
        icon: RiUser3Line,
        title: "Hire a Lawyer",
        text: "Get a reputed lawyer to sort out your problems.",
        link: "https://nalsa.gov.in/services/legal-aid/legal-services",
        buttonLabel: "Ask Here",
        tourData: "tour-hire"
    }
];


const tourSteps = [

    {
        selector: '[data-tour="qa-section"]',
        content: 'Here, you can see different legal questions and answers.',
        action: () => speak('Here, you can see different legal questions and answers.')
    },
    {
        selector: '[data-tour="services"]',
        content: 'These are different services you can avail.',
        action: () => speak('These are different services you can avail.')
    },
    {
        selector: '[data-tour="tour-question"]',
        content: 'Use this to ask legal questions.',
        action: () => speak('Use this to ask legal questions.')
    },
    {
        selector: '[data-tour="tour-call"]',
        content: 'Use this to directly call a lawyer.',
        action: () => speak('Use this to directly call a lawyer.')
    },
    {
        selector: '[data-tour="tour-hire"]',
        content: 'Use this if you wish to hire a lawyer.',
        action: () => speak('Use this if you wish to hire a lawyer.')
    }
];

const Legal = () => {
    const textColor = useColorModeValue("black", "white");
    const cardBgColor = useColorModeValue("white", "gray.700");
    const bg = useColorModeValue("gray.100", "gray.800");
    const accentColor = useColorModeValue("#FFD700", "#FFEB3B");
    const tourBgColor = useColorModeValue("white", "gray.800");
    const tourTextColor = useColorModeValue("black", "black");

    const [isTourOpen, setTourOpen] = useState(false);


    const customTourStyles = {
        tooltip: {
            backgroundColor: tourBgColor,
            color: tourTextColor,
        },
        mask: {
            backgroundColor: 'rgba(0,0,0,0.5)'
        },
    };

    return (
        <Box bg={bg} minHeight={'100vh'}>
            <Box
                width={'full'}
                background={'black'}

            >
                <Text padding={['1.5', '5']} color={'whitesmoke'} fontSize={'6xl'} fontFamily={'serif'}>
                    Legal Advice
                    <Text fontSize={'xl'}> For Tutorial to the website <Button onClick={() => setTourOpen(true)} variant={'link'}>Click Here..</Button></Text>
                </Text>
            </Box>


            <Box
                data-tour="qa-section"
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
                data-tour="services"
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
                        data-tour={card.tourData}
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
                        <MotionVStack
                            align='center'
                            spacing="4"
                            justifyContent="center"
                            h="100%"
                            {...popInAnimation}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            p={4}
                            borderRadius="md"
                            boxShadow="md"
                            bg={cardBgColor}
                            color={textColor}
                        >
                            <motion.div whileHover={{ rotate: 360, transition: { duration: 0.6 } }}>
                                <Icon as={card.icon} w={8} h={8} />
                            </motion.div>

                            <Heading size="md">{card.title}</Heading>

                            <Text fontSize="sm">{card.text}</Text>

                            <LinkOverlay as={Link} to={card.link}>
                                <motion.button
                                    whileHover={{ y: '-5px', transition: { yoyo: Infinity, duration: 0.3 } }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button colorScheme="yellow" variant="outline" w="full">{card.buttonLabel}</Button>
                                </motion.button>
                            </LinkOverlay>
                        </MotionVStack>
                    </LinkBox>
                ))}
            </Flex>

            <Tour
                steps={tourSteps}
                isOpen={isTourOpen}
                onRequestClose={() => setTourOpen(false)}
                rounded={5}
                accentColor={accentColor}
                styles={customTourStyles}
                onChange={(currentIndex) => {
                    const currentStep = tourSteps[currentIndex];
                    if (currentStep && currentStep.action) {
                        currentStep.action();
                    }
                }}
            />
        </Box>
    );
};

export default Legal;