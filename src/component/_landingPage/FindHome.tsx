"use client"
import { Image, Box, Stack, Text, Flex, Button } from '@chakra-ui/react';
import React from 'react';
import { ButtonKimmo } from '../subComponents/buttonComponent';
import { MdArrowRightAlt, MdChevronRight } from 'react-icons/md';

function FindHome() {
    return (
        <div className='min-h-[90vh]'>
          <Box className='md:space-x-10' display={{base:'flex-col', md:'flex'}} mt={'24vh'} mx={'10vw'}>
            <Stack>
               <Text fontSize='sm' className='font-semibold'>Discover</Text>
               <Text fontSize={'3xl'} className='font-bold md:w-[29rem]'>Unlock The Potential Of Your Property</Text>
               <Text fontSize={'15px'} className='font-extralight md:w-[38rem] '>At Kimmo Deals, we offer comprehensive property management and sales solutions that maximize your property&apos;s value and streamline the entire process. Whether you&apos;re a property owner or a buyer, our platform is designed to meet your unique needs and provide you with the best possible experience.</Text>

               <Flex>
                  <Box>
                    <Image src='/solutions.png' alt='solutions' className='w-14 h-14 mx-[-12px]'/>
                    <Text fontSize={'md'} className='font-semibold'>Efficient Solutions</Text>
                    <Text fontSize={'sm'} className='font-thin md:w-[19rem]'>Save time and effort with our efficient property management and sales solutions.</Text>
                  </Box>  
                  <Box>
                    <Image src='/assist.png' alt='solutions' className='w-15 h-14 mx-[-12px]'/>
                    <Text fontSize={'md'} className='font-semibold'>Expert Assistance</Text>
                    <Text fontSize={'sm'} className='font-thin md:w-[19rem]'>Get expert assistance and guidance throughout the property management and sales process.</Text>
                  </Box>  
               </Flex>

                <Flex mt={9} className='space-x-4'>
                    <ButtonKimmo label='Learn More'/>
                    <Button variant='ghost' as='a' href='#' fontSize='sm' className='font-primary text-sm'>
                     Sign Up
                     <span><MdChevronRight className='mx-5 text-[20px] font-bold text-tertiary'/> </span>
                    </Button>
                </Flex>
            </Stack>
            
            <Box boxSize='sm' className='hover:cursor-pointer hover:scale-95 transition-all ease-in-out duration-500 hover:opacity-80'>
               <Image src='/agent.jfif' alt='agent' className='rounded-md w-[25rem] h-[25rem]'/> 
            </Box>
          </Box>  
        </div>
    );
}

export default FindHome;