"use client"
import React from 'react';
import Navbar from "@/component/_landingPage/Navbar";
import {Box, Center, Text, Flex, Heading, HStack, Image, Button} from "@chakra-ui/react";
import data from "@/component/land/Yaounde";
import {LandsButton} from "@/component/subComponents/buttonComponent";
import Footer from "@/component/_landingPage/Footer";
import {Icon} from "@chakra-ui/icons";
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import {FaArrowLeft} from "react-icons/fa";


function LandData() {
    return (
        <>
            <Navbar />
              <Box minHeight={'85vh'} >
                <Box mt={{sm:'1rem',md:'3rem'}}>
                    <Flex alignItems='center' justify='space-between'>
                        <Heading fontSize={{sm:'15px', md:'1.8rem'}} mx={{md:'12px'}} p={{sm:1, md:3}}>{data.landTitle}</Heading>
                        <Link display={{sm:'none', md:'inline-flex'}} _hover='' className='hover:underline-none' as={NextLink} href='/'>
                            <Button bg='#008374' spacing='1rem'
                                    className='text-[#fff]'
                                    _hover={{bg:'green.600',}}
                                    mx='10px'
                                    h={{sm:'2rem', md:'2rem'}}
                                    w={{sm:'3.6rem', md:'4rem'}}>
                                <Flex alignItems='center'>
                                    <Icon as={FaArrowLeft} className='text-white text-sm'/>
                                    home
                                </Flex>
                            </Button>
                        </Link>
                    </Flex>
                    <Box p={3}>
                        <Image src={data.imageSrc}
                               height={{sm:'13rem', md:'22rem'}}
                               width={{sm:'85%', md:'45%'}}
                               mx={{sm:'', md:'12px'}}
                               alt='map' />
                    </Box>
                </Box>
                  <Flex
                      flex={1}
                      mt={'2rem'}
                      bg={'#fff'}
                      p={2}
                      className='shadow-md'
                      width={{sm:'84%', md:'30%'}}
                      height={'20%'}
                      flexDirection={'column'}
                      mx={{sm:'8px', md:'12px'}}
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
              </Box>
            <Footer />
        </>
    );
}

export default LandData;
