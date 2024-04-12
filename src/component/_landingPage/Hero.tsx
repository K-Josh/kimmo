"use client"
import React from 'react';
import {Box, Flex, Text, Heading, Stack, Input, IconButton} from "@chakra-ui/react";
import Navbar from "@/component/_landingPage/Navbar";
import {SearchIcon} from "@chakra-ui/icons";


function Hero() {
    return (
        <div className='back min-h-[87vh]'>
          <Flex p={{base:2,md:1}}
                justifyContent={{base:'', md:'space-between'}}
              flex={{base: '1', md: '1'}}
               width={'100%'}>
              <Stack
                  zIndex={1}
                  spacing={7}
                  my={{base:'5rem', md: '7rem'}}
                  px={{md: '6rem'}}>
                <Heading
                    w={{base: '15rem', md: '28rem'}} as='h2'
                    color='white' >
                    Find the perfect plan to Live with your family
                </Heading>
                  <Box py={'2rem'} bg={'white'}
                       height={{base: '2rem', md:'3.5rem'}}
                       className='rounded-bl-none rounded-br-none'
                       width={{base:'9rem', md:'13rem'}} borderRadius={'10px'}>
                     <Flex
                         mx={{base:'', md:'4rem'}} py={{base:'', md:'0.4rem'}}
                           gap={3}>
                         <Text my={{base:'-2rem', md:'-2.1rem'}}
                               fontSize={{base:'15px', md:'15px'}}
                               className='relative text-gray-500 cursor-pointer font-semibold opacity-90 whitespace-nowrap'>For Sale</Text>
                         <Text my={{base:'', md:'-2.1rem'}}
                               fontSize={{base:'-2rem', md:'15px'}}
                               className='relative text-gray-500 cursor-pointer font-semibold opacity-90 whitespace-nowrap'>For Rent</Text>
                     </Flex>
                      <Box bg={'white'} height={{base:'3.5rem', md:'5rem'}}
                            className='rounded-tl-none'
                            width={{base:'19rem', md:'40rem'}} borderRadius={'10px'}>
                          <Flex align={'center'} justifyContent={'center'}>
                              <Input variant='unstyled'
                                     className='placeholder:pl-[1rem]'
                                   placeholder='Enter the area you want to search'
                                     my={{md:10, base: 6}}  />
                              <IconButton
                                  borderRadius={'full'}
                                  bg={'#008374'}
                                  _hover={{bg: '#008350'}}
                                    className='mx-[5px]'
                                  icon={<SearchIcon className='text-white'/>}  aria-label={'search'}/>
                          </Flex>
                      </Box>
                  </Box>
                  <Box className='relative my-[4rem]'>
                      <Text fontSize={{base:'10px', md:'14px'}} className='text-white'>Or browse featured categories:</Text>
                  </Box>
              </Stack>
          </Flex>
        </div>
    );
}

export default Hero;
