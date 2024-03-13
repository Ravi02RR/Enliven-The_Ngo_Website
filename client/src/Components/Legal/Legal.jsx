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
import { SiGoogletranslate } from "react-icons/si";
import { Link } from "react-router-dom";
import { questionsAndAnswers } from "./Legaldata";
import { motion } from 'framer-motion';
import Tour from "reactour";


const MotionVStack = motion(VStack);

const popInAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const Legal = () => {
    const [isTourOpen, setTourOpen] = useState(false);
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage(prevLang => prevLang === 'en' ? 'hi' : 'en');
    };

    const speak = (message) => {
        if ('speechSynthesis' in window) {
            let utterance = new SpeechSynthesisUtterance(message);
            utterance.lang = language === 'en' ? 'en-US' : 'hi-IN';
            window.speechSynthesis.speak(utterance);
        } else {
            console.error('Your browser does not support the Web Speech API');
        }
    };

    const Array1 = {
        en: [
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
        ],
        hi: [
            {
                icon: RiMessage2Line,
                title: "प्रश्न पूछें",
                text: "वकीलों से कानूनी उत्तर प्राप्त करें। यह तेज़, आसान, और अज्ञात है!",
                link: "/question",
                buttonLabel: "यहाँ पूछें",
                tourData: "tour-question"
            },
            {
                icon: RiPhoneLine,
                title: "वकील से बात करें",
                text: "अपनी समस्याओं के बारे में व्यक्तिगत रूप से वकील से बात करें।",
                link: "tel:+01123381023",
                buttonLabel: "011-23381023 पर कॉल करें",
                tourData: "tour-call"
            },
            {
                icon: RiUser3Line,
                title: "वकील को नियुक्त करें",
                text: "अपनी समस्याओं को हल करने के लिए प्रतिष्ठित वकील प्राप्त करें।",
                link: "https://nalsa.gov.in/services/legal-aid/legal-services",
                buttonLabel: "यहाँ पूछें",
                tourData: "tour-hire"
            }
        ]
    };

    const tourStepsTranslations = {
        en: [
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
        ],
        hi: [
            {
                selector: '[data-tour="qa-section"]',
                content: 'यहाँ, आप विभिन्न कानूनी प्रश्न और उत्तर देख सकते हैं।',
                action: () => speak('यहाँ, आप विभिन्न कानूनी प्रश्न और उत्तर देख सकते हैं।')
            },
            {
                selector: '[data-tour="services"]',
                content: 'ये हैं विभिन्न सेवाएँ जिन्हें आप उपयोग कर सकते हैं।',
                action: () => speak('ये हैं विभिन्न सेवाएँ जिन्हें आप उपयोग कर सकते हैं।')
            },
            {
                selector: '[data-tour="tour-question"]',
                content: 'इसका उपयोग कानूनी प्रश्न पूछने के लिए करें।',
                action: () => speak('इसका उपयोग कानूनी प्रश्न पूछने के लिए करें।')
            },
            {
                selector: '[data-tour="tour-call"]',
                content: 'वकील से सीधे बात करने के लिए इसका उपयोग करें।',
                action: () => speak('वकील से सीधे बात करने के लिए इसका उपयोग करें।')
            },
            {
                selector: '[data-tour="tour-hire"]',
                content: 'यदि आप वकील को नियुक्त करना चाहते हैं, तो इसका उपयोग करें।',
                action: () => speak('यदि आप वकील को नियुक्त करना चाहते हैं, तो इसका उपयोग करें।')
            }
        ]
    };

    const currentArray1 = Array1[language];
    const tourSteps = tourStepsTranslations[language];
    const currentQuestionsAndAnswers = questionsAndAnswers[language];


    const textColor = useColorModeValue("black", "white");
    const cardBgColor = useColorModeValue("white", "gray.700");
    const bg = useColorModeValue("gray.100", "gray.800");
    const accentColor = useColorModeValue("#FFD700", "#FFEB3B");
    const tourBgColor = useColorModeValue("white", "gray.800");
    const tourTextColor = useColorModeValue("black", "black");

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

                </Text>

                <Box display={'flex'}
                    justifyContent={'space-between'}
                    alignContent={'center'}>



                    <Text padding={['1.5', '5']} fontSize={'xl'} color={'white'}> For Tutorial to the website <Button onClick={() => setTourOpen(true)} variant={'link'} colorScheme="yellow">Click Here..</Button></Text>
                    <Button onClick={toggleLanguage} variant={'link'} size={'lg'} colorScheme="yellow">
                        {language === 'en' ? <SiGoogletranslate /> : <SiGoogletranslate />}
                    </Button>
                </Box>

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
                    {currentQuestionsAndAnswers.map((qa, index) => (
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
                {currentArray1.map((card, idx) => (
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
