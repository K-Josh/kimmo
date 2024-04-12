"use client"
import React from 'react';
import {Box, Text, Container, Flex, Image} from "@chakra-ui/react";
import {CardElement} from "@/component/subComponents/cardComponent";

export const cards = [
    {
        id: "1",
        number: "01",
        title: "Search Your Dream Home",
        text: "Get ready to launch your real\n" +
            "estate website without...",
        icon: "../Images/Icon.png"
    },
    {
        id: "2",
        number: "02",
        title: "Choose The House You Like",
        text: "Get ready to launch your real\n" +
            "estate website without...",
        icon: "../Images/house_icon.png"
    },
    {
        id: "3",
        number: "03",
        title: "Enquire About This Property",
        text: "Get ready to launch your real\n" +
            "estate website without...",
        icon: "../Images/message_icon.png"
    },
    {
        id: "4",
        number: "04",
        title: "Own Your Home",
        text: "Get ready to launch your real\n" +
            "estate website without...",
        icon: "../Images/leaf_icon.png"
    }
]

function FindHome() {
    return (
            <Container className='overflow-x-hidden' my={{base:'14vh', md:'13vh'}} maxW={'container.lg'}>
                <Box className='flex flex-col md:flex-row'
                     gap={{base: '2rem', md:'3rem'}}
                     >
                      <Box display={{base:'', md:'flex-col'}}
                           align={'center'}
                           justify={'center'}
                          p={{base:'3rem', md:'2rem'}}
                          width={{base:'20rem', md:'30rem'}}
                           height={{base:'24rem', md:'26.5rem'}}
                           className='rounded-md bg-[#BBE2EC] overflow-y-hidden overflow-x-hidden
                           cursor-pointer'>
                          <CardElement
                              title='The New Way to Find Your Home'
                              text='From as low as $10 per day with limited time offer discounts'
                              image='agent2.png'
                          />
                      </Box>
                    <Box className='flex md:grid md:grid-cols-2 gap-[2.4rem] '>
                            {cards.map((card) => (
                                <div className='border border-[#E9E9E9] hover:shadow-md hover:scale-95
                                hover:duration-500 transition-all
                                 cursor-pointer bg-[#fff] md:h-[12rem] h-[10rem] w-[16rem] p-[2rem] rounded-md
                                 shadow-sm '
                                     key={card.id}>
                                   <Flex className='justify-between'>
                                       <p className='md:text-[1.8rem] font-semibold relative my-2 text-[#008374]'>
                                           {card.number}
                                       </p>
                                      <div className='relative my-[-0.8rem]'>
                                          <Image src={card.icon} alt='icon' />
                                      </div>
                                   </Flex>
                                    <div className='my-2'>
                                        <Text className='font-bold whitespace-nowrap text-[1rem]'>
                                            {card.title}
                                        </Text>
                                        <Text className='font-light'>
                                            {card.text}
                                        </Text>
                                    </div>
                                </div>
                            ))}
                    </Box>
                </Box>
            </Container>
    );
}

export default FindHome;
