"use client"
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { ButtonKimmo, ButtonSearch, ButtonVariant } from '../subComponents/buttonComponent';

function Hero() {
  return (
    <div className='min-h-[80vh] w-full'>
      <Box className='w-full'>
        <img src='/home1.jfif' alt='hero' className='w-full h-[380px]' />
      </Box>

      <Box display={{base:'', md:'flex'}} mt={2} mx={'10vw'}>
        <Flex className='space-x-[18.5rem]' alignItems='center'>
         <Box> 
          <Text fontSize='3xl' className='font-bold w-[300px]' >
             Find Your Dream Property With Us.
          </Text>
          </Box>
          <Stack>
            <Text className='font-extralight opacity-90 text-[15px] w-[500px]'>Welcome to Kimmo Deals, your trusted source for buying and selling properties. Explore our wide range of listings and find the perfect property for your needs.</Text>
            <Flex gap={2}>
              <ButtonSearch label='Search' />
              <ButtonVariant label='Learn More' />
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </div>
  );
}

export default Hero;