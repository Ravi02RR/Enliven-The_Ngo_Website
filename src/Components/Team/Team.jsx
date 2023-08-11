import React from 'react';
import { Box, Flex, Heading, Text, Avatar, Icon, Spacer, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Team = () => {
    const members = [
        {
            name: "Vidushi Pandey",
            position: "Vellore Institute of Technology | Java | Web Developer ",
            image: "https://avatars.githubusercontent.com/u/91135324?v=4", 
            github: "https://github.com/vidushi", 
            linkedin: "https://github.com/MuggleHead" 
        },
        
        {
            name: "Ravi Ranjan",
            position: "Vellore Institute of Technology | Fullstack MERN Developer ",
            image: "https://avatars.githubusercontent.com/u/117570854?v=4", 
            github: "https://github.com/Ravi02RR", 
            linkedin: "https://www.linkedin.com/in/ravi-ranjan-9264b0221" 
        },
        {
            name: "Pritha Dey",
            position: "Vellore Institute of Technology | Fullstack MERN Developer ",
            image: "https://media.licdn.com/dms/image/C5603AQGnttRzDVtkPg/profile-displayphoto-shrink_400_400/0/1661353740191?e=1697068800&v=beta&t=jI10_lrUbxBeQvgsnhhn4KCGm0mxCYHKSGyCqHPCfZE", 
            github: "https://github.com/Ravi02RR", 
            linkedin: "https://www.linkedin.com/in/ravi-ranjan-9264b0221" 
        }
    ];

    return (
        <Box p={5} height={'100vh'}>
            <Heading mb={5}>Our Team</Heading>

            {members.map((member, idx) => (
                <Flex key={idx} p={5} borderWidth="1px" borderRadius="lg" mb={5}>
                    <Avatar size="xl" src={member.image} alt={member.name} />

                    <Box ml={5}>
                        <Heading size="md">{member.name}</Heading>
                        <Text mt={2}>{member.position}</Text>
                        <Flex mt={2}>
                            <Link href={member.github} isExternal mr={3}>
                                <Icon as={FaGithub} w={6} h={6} />
                            </Link>
                            <Link href={member.linkedin} isExternal>
                                <Icon as={FaLinkedin} w={6} h={6} />
                            </Link>
                        </Flex>
                    </Box>

                    <Spacer />
                </Flex>
            ))}
        </Box>
    );
}

export default Team;
