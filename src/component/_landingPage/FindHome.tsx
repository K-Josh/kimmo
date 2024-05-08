"use client"
import React, {useState} from 'react';
import {Box, Text, Container, Flex, Image, useDisclosure} from "@chakra-ui/react";
import {CardElement} from "@/component/subComponents/cardComponent";
import ReadMore from "@/component/modals/ReadMore";

function FindHome() {
    const {onOpen} = useDisclosure()
    const [showModal, setShowModal] = useState(false)
    return (
            <Container minH={{sm:'75dvh', md:'90vh'}} my={{base:'10vh', md:'10vh'}} maxW={{md:'container.lg'}}>
                <Box className='flex flex-col md:flex-row md:items-center'
                     gap={{base:'2rem', md:'3rem'}}
                     >
                      <Box display={{base:'', md:'flex-col'}}
                           align={'center'}
                           justify={'center'}
                          p={{sm:'2rem', md:'2rem'}}
                          width={{sm:'20rem', md:'30rem'}}
                           height={{sm:'24rem', md:'26.5rem'}}
                           className='rounded-md bg-[#BBE2EC] overflow-y-hidden overflow-x-hidden
                           cursor-pointer'>
                          <CardElement
                              title='The New Way to Find Your Home'
                              text='From as low as $10 per day with limited time offer discounts'
                              image='agent2.png'
                          />
                      </Box>
                    <Box width={{sm:'19rem', md:'21rem'}}>
                        <Text className='font-light'>
                            This is a website that helps people find land for sale in Cameroon.
                            It works with trusted real estate agencies to offer land in different regions of the country.
                        </Text>
                        <Text className='cursor-pointer font-semibold ' onClick={() => setShowModal(true)}>Read more...</Text>
                        {showModal &&  <ReadMore onclose={() => setShowModal(false)} />}
                    </Box>
                </Box>
            </Container>
    );
}

export default FindHome;
