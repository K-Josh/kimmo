"use client"
import React, {useState} from 'react';
import {Box, Text, Flex, Heading, HStack, Button, Image, useDisclosure} from "@chakra-ui/react";
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
import data from "@/component/land/Ngaoundere";


function LandData() {
    const{isNewWindow} = useState(false);
    const {isOpen} = useState(false);
    return (
        <>
            <Flex>
             <Box className='bg-[#F58634] w-[73vw] relative z-1 md:h-[560px] h-[450px] rounded-br-full rounded-bl-3xl '>
                {isNewWindow && <Navbar/>}
                {!isNewWindow && <NewWindowNavbar />}
             </Box>
                <Flex>
                    <Box my={{sm:'13vh', md:'25vh'}} mx={{sm:'-13rem', md:'-45rem'}} className='absolute z-1'>
                            <Text className={`relative font-primary opacity-100 text-white text-[1.2rem] md:text-[2.8rem] ${isOpen && 'opacity-0'}`}>
                                Live at your own pace
                            </Text>
                        {!isOpen &&
                            <Heading fontSize={{sm:'13px', md:'1.8rem'}} color='white' mx={{md:'12px'}}>{data.landTitle}</Heading>
                            }
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
                        display={{base:'none', md:'flex'}}
                         className='relative mx-[-10rem] my-[20vh]'>
                        <Image src='../figma.png' boxSize='300px'
                               display={{sm:'none', md:'inline-flex'}}
                               className='transition-all duration-500 ease-in cursor-pointer hover:scale-95'
                               height='400px' alt='image' />
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
                className={`relative z-1 ${isOpen ? 'my-5rem' : 'my-0'} transition-all duration-500 ease-in-out`}
            >
                <Flex
                    mt={{sm:'-13rem', md:'-15rem'}}
                    bg={'#fff'}
                    p={2}
                    className='shadow-md rounded-md'
                    width={{sm:'84%', md:'30%'}}
                    height={'20%'}
                    flexDirection={'column'}
                    mx={{sm:'8px', md:'19rem'}}
                >
                    <HStack p={4} display={'flex'} justify={'space-between'}>
                        <Box>
                            <Text className='font-semibold'>{data.landDescription}</Text>
                            <Text className='font-light'>{data.landPrice}<sup>2</sup></Text>
                        </Box>
                        <Box>
                            <LandsButton label='300 m' />
                        </Box>
                    </HStack>
                    {data.Data.map((item, index) => (
                            <Box p={1}>
                                <Text >{item.title}</Text>
                                <Text>{item.text}</Text>
                                <Text className='font-light'>{item.superficial}</Text>
                            </Box>
                    ))}
                </Flex>
            </motion.Box>
            <NewListing />
            <Footer />
        </>
    );
}

export default LandData;
