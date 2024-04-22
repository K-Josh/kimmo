"use client"
import React from 'react';
import {Box, Divider, Flex, Image, Input, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/icons";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa6";

function Footer() {
    return (
        <Box className='mt-6 bg-[#1e1e1e] text-[#fff] w-[100%] h-[50%]'>
            {/*header in footer*/}
            <Flex p={{sm:'2rem', md:'3rem'}} justifyContent='space-between'>
              <Box>
                  <h1 className='md:text-[15px] text-[12px] whitespace-nowrap font-semibold'>Kimmo-Deals</h1>
              </Box>
              <Box>
                  <Flex gap={2} justifyContent='center' alignItems='center'>
                      <Text
                          className='text-[12px] whitespace-nowrap font-semibold md:text-sm'>
                          Follow Us
                      </Text>
                      <Flex className='md:gap-3 gap-1'>
                          <Icon as={FaFacebookF} className='text-white text-[12px] md:text-[14px]'/>
                          <Icon as={FaTwitter} className='text-white text-[12px] md:text-[14px]'/>
                          <Icon as={FaInstagram} className='text-white text-[12px] md:text-[14px]'/>
                          <Icon as={FaLinkedinIn} className='text-white text-[12px] md:text-[14px]'/>
                      </Flex>
                  </Flex>
              </Box>
            </Flex>
        {/*  main content  */}
            <Divider className='opacity-30'
                orientation='horizontal'
                     mt={{sm:'-20px', md:'-1rem'}} w={{sm:'82%', md:'94%'}} mx={{sm:'1.6rem',md:'3rem'}} />
            <SimpleGrid spacingY={{sm:'13px'}} columns={{sm:2, md:3}} p={{sm:'2rem', md:'3rem'}}
                        mt={{sm:'-10px',md:'-2.5rem'}} className='relative gap-x-3 z-1'>
                <Stack spacingY='10px'>
                    <Text className='font-semibold'>Popular Search</Text>
                    <Text fontSize={{sm:'13px', md:'15px'}} className='opacity-80'>Apartment for Sale</Text>
                    <Text fontSize={{sm:'13px', md:'15px'}} className='opacity-80'>Apartment for Rent</Text>
                    <Text fontSize={{sm:'13px', md:'15px'}} className='opacity-80'>Offices for sale</Text>
                    <Text fontSize={{sm:'13px', md:'15px'}} className='opacity-80'>Offices for Rent</Text>
                </Stack>
                <Stack spacingY='10px'>
                    <Text className='font-semibold'>Quick Links</Text>
                    <Text fontSize={{sm:'13px', md:'15px'}} className='opacity-80'>Terms of use</Text>
                    <Text fontSize={{sm:'13px', md:'15px'}} className='opacity-80'>Privacy Policy</Text>
                    <Text fontSize={{sm:'13px', md:'15px'}} className='opacity-80'>Pricing Plans</Text>
                    <Text fontSize={{sm:'13px', md:'15px'}} className='opacity-80'>Our Services</Text>
                    <Text fontSize={{sm:'13px', md:'15px'}} className='opacity-80'>Contact</Text>
                    <Text fontSize={{sm:'13px', md:'15px'}} className='opacity-80'>FAQs</Text>
                </Stack>
                <Stack className='gap-[10px]'>
                    <Flex className='md:gap-[2rem] gap-[1rem]'>
                        <Box>
                            <Text fontSize={{sm:'13px', md:'15px'}} className='whitespace-nowrap opacity-80'>Customer Care</Text>
                            <Text fontSize={{sm:'13px', md:'15px'}} className='font-semibold'>+(237) 671772085</Text>
                        </Box>
                        <Box>
                            <Text fontSize={{sm:'13px', md:'15px'}} className='opacity-80'>Live Support ?</Text>
                            <Text fontSize={{sm:'11px', md:'15px'}} className='font-semibold'>kimmodeals@gmail.com</Text>
                        </Box>
                    </Flex>
                    <Box className='gap-[1rem]'>
                        <Text fontSize={{sm:'13px', md:'15px'}} mb='12px'
                              className='whitespace-nowrap font-semibold'>
                            Keep yourself Up to Date
                        </Text>
                        <Input placeholder='Your email'
                               bg='#fff'
                               focusBorderColor='green.400'
                               className='text-gray-600'
                               _placeholder={{fontSize:'12px', color:'gray.600', px:'8px'}}
                               type='email' />
                    </Box>
                </Stack>
            </SimpleGrid>
            <Divider className='opacity-30'
                     orientation='horizontal'
                     mt={{sm:'-20px', md:'-1rem'}} w={{sm:'82%', md:'94%'}}
                     mx={{sm:'1.6rem',md:'3rem'}} />
            <Flex p={{sm:'2rem', md:'3rem'}} mt={{sm:'-1.3rem', md:'-2rem'}} justifyContent='space-between'>
                <Box>
                    <h1 className='md:text-[10px] text-[8px] whitespace-nowrap'>Kimmo-All rights reserved</h1>
                </Box>
                <Box>
                    <Flex gap={2} justifyContent='center' alignItems='center'>
                        <Text
                            className='text-[10px] whitespace-nowrap opacity-60'>
                            Privacy
                        </Text>
                        <Text
                            className='text-[10px] whitespace-nowrap opacity-60'>
                            Terms
                        </Text>
                        <Text
                            className='text-[10px] whitespace-nowrap opacity-60'>
                            Sitemap
                        </Text>
                    </Flex>
                </Box>
            </Flex>
            <Box mt={{sm:'-10rem', md:'-22rem'}} >
                <Image src='/footer.png' mx='-3rem' className='relative' alt='building' />
            </Box>
        </Box>
    );
}

export default Footer;
