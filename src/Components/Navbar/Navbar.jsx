import React from 'react'
import { Box, Button, Flex, Spacer, VStack, useDisclosure } from "@chakra-ui/react";
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

const LinkButton = ({ url = "/", title = "Home", onClose }) => (
    <Link to={url}>
        <Button onClick={onClose} variant={'link'}>{title}</Button>
    </Link>
)

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Box boxShadow={'base'} height={'16'}>
                <Flex width={'full'} alignItems={'center'} spacing={'1'}>
                    <Button
                        ref={btnRef} width={'12'}
                        height={'12'}
                        rounded={'full'}
                        variant={"ghost"}
                        size="md" onClick={onOpen}
                    >
                        <RiMenuFill />
                    </Button>
                    <Text fontFamily={['serif']} fontSize={['2xl', '4xl']}>
                        Enliven
                    </Text>
                    <Spacer />
                    <ColorModeSwitcher />

                    <Drawer
                        isOpen={isOpen}
                        placement='left'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay backdropFilter={'blur(20px)'} />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>
                                <Text fontFamily={['serif']} fontSize={['2xl', '4xl']}>
                                    Enliven
                                </Text>
                            </DrawerHeader>

                            <DrawerBody>
                                <VStack spacing={'8'} alignItems={'flex-start'}>
                                    <LinkButton onClose={onClose} url="/" title="Home" />
                                    <LinkButton onClose={onClose} url="/legal" title="Legal Advice" />
                                    <LinkButton onClose={onClose} url="/ngo" title="Ngo" />
                                    <LinkButton onClose={onClose} url="/blog" title="Blog" />
                                    <LinkButton onClose={onClose} url="/contact" title="Contact us" />
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
