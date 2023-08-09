import React, { useState } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Image,
    Input,
    LinkBox,
    LinkOverlay,
    useColorModeValue
} from "@chakra-ui/react";
import { Ngodata } from './NgoData';

const Ngo = () => {
    const [filter, setFilter] = useState('');

    const textColor = useColorModeValue("gray.700", "gray.200");
    const inputBgColor = useColorModeValue("gray.100", "gray.600");
    const cardBgColor = useColorModeValue("white", "gray.700");

    let dataSearch = Ngodata.cardData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        );
    });

    return (<><Box width={'full'} background={'black'}>
        <Text padding={['1.5', '5']} color={'whitesmoke'} fontSize={'6xl'} fontFamily={'serif'}>Ngos</Text>
    </Box>
        <Box bg={useColorModeValue("gray.50", "gray.800")} p={5}>
            <Heading color={textColor} mb={4} textAlign="center">Reach Your Aid</Heading>
            <Text fontSize="xl" mb={4} color={textColor} textAlign="center">Find Help Near you!</Text>

            <Box mb={6} width={{ base: "100%", md: "60%" }} mx="auto">
                <Input
                    placeholder="Search NGO's Near You..."
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                    bg={inputBgColor}
                />
            </Box>

            <Flex wrap="wrap" justify="center">
                {dataSearch.map(item => (
                    <LinkBox key={item.id} width={{ base: "90%", md: "45%", lg: "30%" }} p={4}>
                        <Box boxShadow="xl" rounded="lg" overflow="hidden" bg={cardBgColor}>
                            <Image src={item.img} alt={item.title} />
                            <Box p={5} transition="0.3s">
                                <LinkOverlay href={item.link}>
                                    <Heading size="md" mb={3} color={textColor}>{item.title}</Heading>
                                </LinkOverlay>
                                <Text mb={2} color={textColor}>{item.desc}</Text>
                                <Text mb={2} color={textColor}>{item.desc2}</Text>
                                <Text color={textColor}>{item.contact}</Text>
                            </Box>
                        </Box>
                    </LinkBox>
                ))}
            </Flex>
        </Box>

    </>

    );
}

export default Ngo;
