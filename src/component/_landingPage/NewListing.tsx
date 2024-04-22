"use client"
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box, Container, IconButton, Text} from "@chakra-ui/react";
import {ListingCard} from "@/component/subComponents/cardComponent";
import {lists} from "@/component/Data/Lists";
import Slider from 'react-slick'
import {MdArrowOutward} from "react-icons/md";

function NewListing() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
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

    return <Container my={{base:'14vh', md:'13vh'}} maxW={'container.lg'}>
         <Box gap={{base:'2.8rem', md:'3rem'}}>
           <Box className='flex flex-col md:flex-row md:items-center md:justify-between' mb={'2rem'}>
              <Box>
                  <Text fontSize={{base:'1.6rem', md:'2.5rem'}} className='font-bold'>
                      Discover our Featured Listings
                  </Text>
              </Box>
               <Box display={'flex-start'}
                   className='relative cursor-pointer'>
                   <Text fontSize={'0.8rem'}>
                       See All Properties
                       <IconButton aria-label='up arrow' colorScheme='none'
                                   icon={<MdArrowOutward className='text-[#1e1e1e]' />} />
                   </Text>
               </Box>
           </Box>
             <Slider {...settings}>
             {lists.map((list) => (
                    <ListingCard key={list.id} {...list} />
            ))}
             </Slider>
         </Box>
    </Container>
        ;
}

export default NewListing;
