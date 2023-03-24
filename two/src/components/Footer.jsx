import { Box, Button, Heading, HStack, Input, Stack, VStack } from '@chakra-ui/react';
import React from 'react' ;
import { AiOutlineSend  } from "react-icons/ai";
import { Text } from '@chakra-ui/react';
const Footer = () => {
    return(
        <Box bgColor={"blackAlpha.900"} minH ={"40"}  p="16" color={ "white"}>
             
            <Stack  direction={['column', 'row']} >

            <VStack alignItems= {"stretch"}  w ={"full"} px= {"4"}>
            <Heading size={'md'}  textTransform ={'uppercase'} textAlign ={['center' , 'left']}>
            Suscribe to get more videos
            </Heading>

            <HStack  
            borderBottom={' 2px solid  white'} py= "2" >
                <Input placeholder='Enter Email Here...' border={'none'}  borderRadius = "none" focusBorderColor= "none" outline={'none'}   />
                <Button  p={'0'} colorScheme ={'purple'}  variant ={'ghost'}   borderRadius ={ '0px 20px 20px 0px '}>

                <AiOutlineSend  size={20}/>
                </Button>
            </HStack>
            </VStack>

            <VStack  w = {'full'}    borderLeft={['none',' 1px solid white']} 
            borderRight ={['none', '1px solid white']} >

                <Heading  textTransform={'uppercase'}  textAlign = {'center'}  size ={'md'}>
                   VIDEO HUB
                </Heading>
                <Text>All Rights received</Text>

            </VStack>

                <VStack w={'full'}>
                    <Heading  size= {'md'} textTransform ={'uppercase'}>
                        Social Media
                    </Heading>
                    <Button variant={'link'} colorScheme ={"white"}>
                    <a  target={'black'} href="https://youtu.be/IAGz2bDlwqA">YouTube</a>
                    </Button>

                    <Button variant={'link'} colorScheme ={"white"}>
                    <a target={'black'} href="https://instagram.com/vedantisharma_">Instagram</a>
                    </Button>

                    <Button variant={'link'} colorScheme ={"white"}>
                    <a target={'blank'} href="https://github.com/vedantiSharma">Git Hub</a>
                    </Button>

                </VStack>
            </Stack>
        </Box>
       
    );  
};

export default Footer;  