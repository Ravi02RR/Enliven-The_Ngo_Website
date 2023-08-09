import React from 'react'
import { Box, Button, Flex, Input, Spacer, VStack, useDisclosure } from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Text
} from '@chakra-ui/react'
import { RiMenuFill } from "react-icons/ri"
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import { Link } from 'react-router-dom';

const LinkButton = ({ url = "/", title = "Home" }) => (
    <Link to={url}>
        <Button variant={'link'}>{title}</Button>
    </Link>
)


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>

            <Box boxShadow={'base'} height={'16'}>
                <Flex width={'full'} alignItems={'center'} gap={'1'}>
                    <Button ref={btnRef} width={'12'}
                        height={'12'}
                        rounded={'full'}
                        variant={"ghost"}
                        size="md" onClick={onOpen}
                    >
                        <RiMenuFill ></RiMenuFill>
                    </Button>
                    <Text fontFamily={['serif']}
                        fontSize={['2xl', '4xl']}>
                        Enliven

                    </Text>
                    <Spacer></Spacer>
                    <ColorModeSwitcher></ColorModeSwitcher>

                    <Drawer
                        isOpen={isOpen}
                        placement='left'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay backdropFilter={'blur(20px)'} />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader><Text fontFamily={['serif']}
                                fontSize={['2xl', '4xl']}>
                                Enliven

                            </Text></DrawerHeader>

                            <DrawerBody>
                                <VStack spacing={'8'} alignItems={'flex-start'}>
                                    <LinkButton url="/" title="Home" />
                                    <LinkButton url="/legal" title="Legal Advice" />
                                    <LinkButton url="/ngo" title="Ngo" />
                                    <LinkButton url="/blog" title="Blog" />
                                    <LinkButton url="/contact" title="Contact us" />
                                </VStack>
                            </DrawerBody>

                            <DrawerFooter>

                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </Flex>

            </Box>

        </>
    )
}

export default Navbar
