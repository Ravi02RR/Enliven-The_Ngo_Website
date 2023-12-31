import React from 'react';
import { Box, Text, Flex, Link, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box as="footer" background={'black'} py={4}>
            <Flex direction="column" align="center">
                <Text fontSize="sm" color="gray.300">
                    © {currentYear} Enliven. All rights reserved.
                </Text>
                <Flex mt={2}>
                    <Link href="#" isExternal mx={2}>
                        <IconButton
                            aria-label="LinkedIn"
                            icon={<FaLinkedin />}
                            colorScheme="teal"
                            variant="ghost"
                        />
                    </Link>
                    <Link href="#" isExternal mx={2}>
                        <IconButton
                            aria-label="Instagram"
                            icon={<FaInstagram />}
                            colorScheme="pink"
                            variant="ghost"
                        />
                    </Link>
                    <Link href="#" isExternal mx={2}>
                        <IconButton
                            aria-label="GitHub"
                            icon={<FaGithub />}
                            colorScheme={'red'}
                            variant="ghost"
                        />
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
