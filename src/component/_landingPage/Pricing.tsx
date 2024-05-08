"use client"
import React from 'react';
import {Box, Container, Flex, IconButton, Text} from "@chakra-ui/react";
import {pricing} from "@/component/Data/Lists";
import {FaCircleCheck} from "react-icons/fa6";
import PricingComponent from "@/component/subComponents/PricingComponent";
import {MdArrowOutward} from "react-icons/md";

function Pricing() {
    return (
        <Container minHeight='98vh' mt='3rem' mb='9vh' maxW={"container.lg"}>
            <Box mb={'2.8rem'} justifyContent='center'>
                    <Text fontSize={{base:'1.6rem', md:'2rem'}} className='text-center font-bold'>
                        Membership Plans
                    </Text>
            </Box>

            <Box className='flex flex-col md:flex-row gap-y-[3rem] md:gap-4'>
                {pricing.map((price, index) => (
                     <Box className={`gap-4 ${index === 1 ?
                         'shadow-xl bg-orange-100' : 'hover:shadow-xl hover:bg-orange-100'} 
                         cursor-pointer p-[1rem] md:w-[350px] w-[250px] md:h-[445px] h-[370px] mt-[-2rem] shadow-sm border border-gray-100 transition-all ease-out duration-500`}
                          key={price.id}>
                         <PricingComponent
                             icon={FaCircleCheck}
                              {...price}
                         />

                     </Box>
                ))}
            </Box>
        </Container>
    );
}

export default Pricing;
