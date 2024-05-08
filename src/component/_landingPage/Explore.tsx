"use client"
import React from 'react';
import {Box, Container, Flex, IconButton, Text} from "@chakra-ui/react";
import {cities} from "@/component/Data/Lists";
import {MapCard} from "@/component/subComponents/cardComponent";
import {MdArrowOutward} from "react-icons/md";
import Slider from 'react-slick'

function Explore() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 8000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    }

    return (
        <Container id='explore' my={{base:'34vh', md:'10vh'}} minH={{sm:'75dvh', md:'90vh'}} maxW={'container.lg'}>
           <Box gap={{base:'0.8rem', md:'1rem'}} className='p-2'
                width={'100%'}>
               <Box className='flex flex-col md:flex-row md:items-center md:justify-between' mb={'2rem'}>
                   <Box>
                       <Text fontSize={{base:'1.6rem', md:'2.5rem'}} className='font-bold'>
                           Explore Our Cities
                       </Text>
                   </Box>
                   <Box display={'flex-start'}
                        className='relative cursor-pointer'>
                       <Text fontSize={'0.8rem'}>
                           All Cities
                           <IconButton aria-label='up arrow' colorScheme='none'
                                       icon={<MdArrowOutward className='text-[#1e1e1e]' />} />
                       </Text>
                   </Box>
               </Box>
               <Slider {...settings}>
                   {cities.map((city) => (
                       <MapCard key={city.id} {...city} />
                   ))}
               </Slider>
           </Box>
        </Container>
    );
}

export default Explore;
