import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { ButtonKimmo } from '../subComponents/buttonComponent';
import {  MdChevronRight } from 'react-icons/md';

function FeatureList() {
    return (
        <div className='min-h-[90vh] '>
            <Box className='flex items-center justify-center' mt='18vh'>
              <Stack>
                 <Box className='flex-col items-center justify-center mx-auto text-center'>
                    <Text fontSize='sm' className='font-semibold'>Discover</Text>
                    <Text fontSize={'3xl'} className=' font-bold'>Find Your Dream Property Today</Text>
                    <Text fontSize='14px' className='md:w-[42rem]'>At Kimmo Deals, we offer an extensive range of property listings to help you find your dream property. Our expert management team ensures a seamless buying experience, and our excellent customer service is always there to assist you.</Text>
                 </Box>

                   <Flex className='md:space-x-[5rem] mt-10 items-center'>
                       <Box className='flex flex-col items-center'>
                        <Image src='/listings.png' alt='listings' width={50} height={50} />
                        <Text fontSize='md' className='font-semibold w-[10rem] text-center'>Extensive Property Listings</Text>
                        <Text fontSize='sm' className='md:w-[15rem] text-center'>Browse through our wide selection of properties.</Text>
                      </Box> 
                       <Box className='flex flex-col items-center'>
                        <Image src='/management.png' alt='listings' width={70} height={70} />
                        <Text fontSize='md' className='font-semibold  text-center'>Expert Management</Text>
                        <Text fontSize='sm' className='md:w-[17rem] text-center'>Our experienced team ensures a smooth buying process.</Text>
                      </Box> 
                       <Box className='flex flex-col items-center'>
                        <Image src='/customer.png' alt='listings' width={50} height={50} />
                        <Text fontSize='md' className='font-semibold w-[10rem] text-center'>Excellent Customer Service</Text>
                        <Text fontSize='sm' className='md:w-[18rem] text-center'>We are dedicated to providing top-notch customer support.</Text>
                      </Box> 
                    </Flex> 

                    <Flex mt={9} className='space-x-4 mx-auto'>
                     <ButtonKimmo label='Learn More'/>
                     <Button variant='ghost' as='a' href='#' fontSize='sm' className='font-primary text-sm'>
                     Sign Up
                     <span><MdChevronRight className='mx-5 text-[20px] font-bold text-tertiary'/> </span>
                    </Button>
                </Flex>
                </Stack>
            </Box>
        </div>
    );
}

export default FeatureList;