import { Box , Container, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { Carousel} from "react-responsive-carousel";
 import 'react-responsive-carousel/lib/styles/carousel.min.css';
 import  img1 from '../assets/1.jpg';
 import  img2 from '../assets/2.jpg';
 import  img3 from '../assets/3.jpg';
 import  img4 from '../assets/4.jpg';
 import  img5 from '../assets/5.png';
 
 import { Heading } from "@chakra-ui/react";
 import { Text   } from "@chakra-ui/react";

 //import { Image } from "@chakra-ui/react";

 //import { Container } from "@chakra-ui/react";
 const HeadingOptions ={
    pos: 'absolute',
    left: '50%',
    top:'50%',
    Transform: 'translate(-50% , -50%)',
    textTransform: 'uppercase', p:'4' , size: '4'

 }


const Home =() => {
    return(
       <Box>

        <MyCarousel/>


<Container  maxH = {'container.xl'} minH={'100vh' }   p= "16">
<Heading textTransform={"uppercase"} py ="2" borderBottom={'2px solid'}>
    Services
    
    </Heading>
    <Stack
        h="full"
        p= {'4'}
       alignItems ={"center"}
        direction = {['column', 'row']} >

        <Image src = {img5} h = {[ "300" , "40"]} filter = {'hue-rotate(-130deg)'}/>
        <Text  letterSpacing={'wide'} lineHeight={'150%'} p={["4" ,"16"]}  textAlign={"center"}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem sequi ea accusantium sapiente qui, 
           ipsacorporis optio numquam porro,obcaecati libero asperiores non voluptate quod sunt
            totam debitis odit earum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            A quaerat harum voluptas.Ex molestias possimus et nobis maiores consequatur quasi laudantium unde natus doloribus!
        </Text>

    </Stack>



</Container>


       </Box>
    )
    
};

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box  w ="full" h={'100vh'}  >
            <Image src={img1}/>
            <Heading bgColor = {'blackAlpha.600'} color = {'white'} {...HeadingOptions}>
                watch the future
            </Heading>
        </Box>

        <Box  w ="full" h={'100vh'}  >
            <Image src={img2}/>
            <Heading bgColor = {'blackAlpha.900'} color = {'white'} {...HeadingOptions}>
               future is Gaming
            </Heading>
        </Box>

        <Box  w ="full" h={'100vh'}  >
            <Image src={img3}/>
            <Heading bgColor = {'blackAlpha.600'} color = {'white'} {...HeadingOptions}>
               Gaming on Console
            </Heading>
        </Box>
        <Box  w ="full" h={'100vh'}  >
            <Image src={img4}/>
            <Heading bgColor = {'blackAlpha.600'} color = {'white'} {...HeadingOptions}>
                Night Life is Cool
            </Heading>
        </Box>
        




        </Carousel>
);

export default Home;