"use client"
import React, {useState} from 'react';
import {Box, Center, Flex, Stack, Text} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/icons";
import {PricingButton, PricingButtonActive} from "@/component/subComponents/buttonComponent";
import {MdArrowOutward} from "react-icons/md";

export interface PricingProps {
    tag?: string;
    price?: string;
    text?: string;
    id?: string;
    icon?: any;
    list_one?: string;
    list_two?: string;
    list_three?: string;
    list_four?: string;
    list_five?: string;
}

export default function PricingComponent({tag, price, text, list_one, list_two, list_three, list_four, list_five, icon}: PricingProps) {
    const[active, setActive] = useState(false)
    return (
            <>
                <Stack spacing={2} p={2}>
                    <Text className='font-semibold text-[13px] md:text-[1.3rem]'>{tag}</Text>
                    <Text className='font-bold text-[17px] md:text-[1.9rem]'>${price}</Text>
                    <Text fontSize={{sm:'12px', md:'15px'}} className='md:w-[16rem] w-[10rem] opacity-70 font-light mt-4 mb-4'>
                        {text}
                    </Text>

                        <Stack spacingY={4}>
                            <Flex align='center' className='gap-2'>
                                 <Icon as={icon} />
                                <Text className='text-[13px]'>{list_one}</Text>
                            </Flex>
                           <Flex align='center' className='gap-2'>
                                <Icon as={icon} />
                               <Text className='text-[13px]'>{list_two}</Text>
                           </Flex>
                            <Flex align='center' className='gap-2'>
                                 <Icon as={icon} />
                                <Text className='text-[13px]'>{list_three}</Text>
                            </Flex>
                           <Flex align='center' className='gap-2'>
                                <Icon as={icon} />
                               <Text className='text-[13px]'>{list_four}</Text>
                           </Flex>
                            <Flex align='center' className='gap-2'>
                                 <Icon as={icon} />
                                <Text className='text-[13px]'>{list_five}</Text>
                            </Flex>
                        </Stack>
                   <Center className='mt-5'>
                       {!active && <PricingButtonActive icon={<MdArrowOutward className='text-[#fff]' />} label='Add to Cart' />}
                       {active && <PricingButton icon={<MdArrowOutward className='text-[#fff]' />} label='Add to Cart' />}
                   </Center>
                </Stack>
            </>
    );
}
