import React from "react";
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure, VStack, HStack, space } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";


const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                zIndex={'overlay'}
                pos={"fixed"} top={4}
                left={'4'}
                colorScheme={"purple"}
                p={'0'} h={'10'} w={'10'}
                borderRadius={'full'} onClick={onOpen}>

                <BiMenuAltLeft size={20} />
            </Button>

            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay />

                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>VIDEO HUB</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={"flex-start"}>
                            <Button onClick={onClose} colorScheme={"purple"} variant={'ghost'}>
                                <Link to={'/'}>Home</Link>
                            </Button>

                            <Button onClick={onClose} variant={'ghost'} colorScheme={"purple"}>
                                <Link to={'/videos'}> Videos</Link>
                            </Button>

                            <Button onClick={onClose} variant={'ghost'} colorScheme={"purple"}>
                                <Link to={'/videos?category = free'}>Free videos</Link>
                            </Button>

                            <Button onClick={onClose} variant={'ghost'} colorScheme={"purple"}>
                                <Link to={'/upload'}>upload video</Link>
                            </Button>
                        </VStack>


                        <HStack pos={'absolute'} bottom={'10'} left={'0'} justifyContent={'space-evenly'} w={'full'} >
                            <Button onClick={onClose} colorScheme={'purple'}>
                                <Link to={"/login"} >Log In</Link>
                            </Button>
                            <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                                <Link to={"/Signup"}>Sign Up</Link>
                            </Button>

                        </HStack>
                    </DrawerBody>
                </DrawerContent>

            </Drawer>


        </>
    );
};

export default Header;