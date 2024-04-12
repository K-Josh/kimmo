"use client"
import React from 'react';
import {Box, Flex, HStack, Stack, Text} from "@chakra-ui/react";
import {FaCircleCheck} from "react-icons/fa6";
import {pricingLists} from "@/component/Data/Lists";

export interface PricingProps {
    tag?: string;
    price?: string;
    text?: string;
    id?: string;
    lists?: string;
    onClick?: () => void;
}

export default function PricingComponent({tag, price, text, lists, onClick}: PricingProps) {
    return (
            <Box className='p-3 w-[22rem] mt-[-2rem] shadow-sm border border-gray-300'>
                <Stack spacing={4}>
                    <Text className='font-semibold text-[1.3rem]'>{tag}</Text>
                    <Text className='font-bold text-[1.9rem]'>${price}</Text>
                    <Text className='mt-4'>{text}</Text>
                </Stack>
                <Stack>
                        {pricingLists.map((list) => (
                            <Flex key={list.id}>
                                <FaCircleCheck />
                               <Stack {...list}>
                                   {lists}
                               </Stack>
                            </Flex>
                        ))}

                </Stack>
            </Box>
    );
}
