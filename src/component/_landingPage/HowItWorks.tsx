import { Image, Box, Flex, Stack, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { MdChevronRight } from 'react-icons/md';
import { ButtonKimmo } from '../subComponents/buttonComponent';

function HowItWorks() {
    return (
        <div className='min-h-[90vh]'>
         <Box mt={'10vh'}>
          <Stack>
            <Box className='flex-col items-center justify-center mx-auto text-center'>
             <Text fontSize='sm' className='font-thin'>Discover</Text>
              <Text fontSize={'3xl'} className=' font-bold'>Find Your Dream Property Today</Text>
              <Text fontSize='14px' className='md:w-[42rem]'>At Kimmo Deals, we provide a step-by-step process for buying or selling properties. Our platform makes it easy and convenient to find your dream property or sell your current one.</Text>
            </Box>

            <Flex mt={4} display={{base:'column', md:'inline-flex'}} className='md:space-x-[3rem] items-center justify-center'>
                <Box boxSize='250px' className='cursor-pointer hover:scale-95 hover:opacity-90 transition-all ease-in-out duration-300 flex space-y-4 flex-col items-center'>
                  <Image src='/dream.jfif' alt='img1' className='rounded-md'/>
                  <Text fontSize='md' className='font-semibold whitespace-nowrap'>Find Your Dream Property</Text>
                  <Text fontSize='13px' className='opacity-85 text-center md:w-[25rem]'>Browse through our extensive listings and find the perfect property that meets your needs and preferences.</Text>
                </Box>
                <Box className='cursor-pointer hover:scale-95 hover:opacity-90 transition-all ease-in-out duration-300 flex space-y-2 flex-col items-center'>
                  <Image src='/expert.jfif' alt='img1' className='rounded-md w-[250px] h-[150px]'/>
                  <Text fontSize='md' className='font-semibold text-center'>Sell Your Property Hassle-Free</Text>
                  <Text fontSize='13px' className='opacity-85 text-center md:w-[24rem]'>List your property on our platform and let interested buyers come to you. We handle the marketing and negotiations, making the selling process seamless.</Text>
                </Box>
                <Box boxSize='250px' className='cursor-pointer hover:scale-95 hover:opacity-90 transition-all ease-in-out duration-300 flex space-y-4 flex-col items-center'>
                  <Image src='/guidance.jfif' alt='img1' className='rounded-md'/>
                  <Text fontSize='md' className='font-semibold text-center'>Expert Guidance and Support</Text>
                  <Text fontSize='14px' className='text-center md:w-[24rem] opacity-85'>Our team of experienced professionals is here to assist you at every step of the buying or selling process. We ensure a smooth and successful transaction.</Text>
                </Box>
            </Flex>

            <Flex className='mt-[3rem] space-x-4 mx-auto'>
                <ButtonKimmo label='Get Started'/>
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

export default HowItWorks;