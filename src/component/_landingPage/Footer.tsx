"use client"
import React from 'react';
import {Box, Divider, Flex, Image, Stack, Text} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/icons";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa6";

function Footer() {
    return (
        <Box
             className='mt-4 bg-[#008374] text-[#fff] w-[100%] h-[50%]'>
            {/*header in footer*/}
            <Flex p={{sm:'', md:'3rem'}} justifyContent='space-between'>
              <Box>
                  <h1 className='text-[15px] font-semibold'>Kimmo-Deals</h1>
              </Box>
              <Box>
                  <Flex gap={2} justifyContent='center' alignItems='center'>
                      <Text
                          className='font-semibold text-sm'>
                          Follow Us
                      </Text>
                      <Flex className='gap-3' spacing={4}>
                          <Icon as={FaFacebookF} className='text-white text-[14px]'/>
                          <Icon as={FaTwitter} className='text-white text-[14px]'/>
                          <Icon as={FaInstagram} className='text-white text-[14px]'/>
                          <Icon as={FaLinkedinIn} className='text-white text-[14px]'/>
                      </Flex>
                  </Flex>
              </Box>
            </Flex>
        {/*  main content  */}
            <Divider className='opacity-70'
                orientation='horizontal'
                     mt='-1rem' w='94%' mx='3rem' />
            <Flex p={{sm:'2rem', md:'3rem'}} mt='-2rem' className='relative z-1' justify={'space-between'}>
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
            </Flex>
            <Box mt={{sm:'2rem', md:'-22rem'}} >
                <Image src='/footer.png' mx='-3rem' className='relative' alt='building' />
            </Box>
        </Box>
    );
}

export default Footer;
