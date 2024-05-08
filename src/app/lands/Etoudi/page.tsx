"use client"
import React, {useState} from 'react';
import {Box, Center, Text, Flex, Heading, HStack, Button, Image} from "@chakra-ui/react";
import data from "@/component/land/Yaounde";
import {LandsButton} from "@/component/subComponents/buttonComponent";
import Footer from "@/component/_landingPage/Footer";
import {Icon} from "@chakra-ui/icons";
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import {FaArrowLeft} from "react-icons/fa";
import Navbar from "@/component/_landingPage/Navbar";
import {NewWindowNavbar} from "@/component/layout/Nav";
import { motion } from 'framer-motion';
import {fadeIn} from "@/variants";
import NewListing from "@/component/_landingPage/NewListing";


function LandData() {
    const[isNewWindow, setIsNewWindow] = useState(false);

    return (
        <>
            <Flex>
                <Box className='bg-[#F58634] w-[73vw] relative z-1 md:h-[560px] rounded-br-full rounded-bl-3xl '>
                    {isNewWindow && <Navbar/>}
                    {!isNewWindow && <NewWindowNavbar />}
                </Box>
                <Flex>
                    <Box my={{sm:'10vh', md:'25vh'}} mx={{sm:'-3rem', md:'-46rem'}} className='absolute z-1'>
                        <Text className='relative font-primary text-white text-[2.8rem]'>Live at your own pace</Text>
                        <Heading fontSize={{sm:'15px', md:'1.8rem'}} color='white' mx={{md:'5px'}}>{data.landTitle}</Heading>
                        <Link display={{sm:'none', md:'inline-flex'}} _hover='' className='hover:underline-none' as={NextLink} href='/'>
                            <Button mt='1rem'
                                    className='text-[#fff]'
                                    variant='outline'
                                    colorScheme='#fff'
                                    mx='10px'
                                    h={{sm:'2rem', md:'2.5rem'}}
                                    w={{sm:'3.6rem', md:'6rem'}}>
                                <Flex alignItems='center' spacingX={3}>
                                    <Icon as={FaArrowLeft} className='text-white text-sm'/>
                                    home
                                </Flex>
                            </Button>
                        </Link>
                    </Box>
                    <motion.Box
                        variants={fadeIn("right", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.3}}
                        display={{sm:'none', md:'inline-flex'}}
                        className='relative mx-[-10rem] my-[20vh]'>
                        <Image src='../figma.png' boxSize='300px' className='cursor-pointer hover:scale-95' height='400px' alt='image' />
                    </motion.Box>
                </Flex>
            </Flex>
            {/*  card  */}
            <motion.Box
                variants={fadeIn("left", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.2}}
                mb={{sm:'3vh', md:'7vh'}}
                className='relative z-1'
            >
                <Flex
                    mt={{sm:'-13rem', md:'-18rem'}}
                    bg={'#fff'}
                    p={2}
                    className='shadow-md rounded-md'
                    width={{sm:'84%', md:'40%'}}
                    height={{sm:'20%', md:'40%'}}
                    flexDirection={'column'}
                    mx={{sm:'8px', md:'13rem'}}
                >
                    <HStack p={4} display={'flex'} justify={'space-between'}>
                        <Box>
                            <Text className='font-semibold'>{data.landDescription}</Text>
                            <Text className='font-light'>{data.landPrice}</Text>
                        </Box>
                        <Box>
                            <LandsButton label='300,000/m' />
                        </Box>
                    </HStack>
                    {data.Data.map((item, index) => (
                        <Center>
                            <Box>
                                <Text >{item.title}</Text>
                                <Text>{item.text}</Text>
                                <Text className='font-light'>{item.superficial}</Text>
                            </Box>
                        </Center>
                    ))}
                </Flex>
            </motion.Box>
            <NewListing />
            <Footer />
        </>
    );
}

export default LandData;
