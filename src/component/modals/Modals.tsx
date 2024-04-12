"use client"
import React, {useRef} from 'react';
import {Box, Button, Input, Text, SimpleGrid, Stack, Flex} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/icons";

interface ModalProps {
    title: string;
    text?: string;
    icon?: any;
    onClick?: () => void;
    onClose?: any;
}

function Modals({icon, onclick, title, text, onClose}: ModalProps) {
    const modalRef = useRef();
    const closeModal = (e) => {
        if(modalRef.current === e.target){
            onClose();
        }
    }
    return (
        <Box ref={modalRef} onClick={closeModal} className='fixed z-10 h-screen w-[100%] inset-0 bg-[#1e1e1e] bg-opacity-30 backdrop-blur-sm'>
            <Box
                bg={'white'}
                width='40%'
                height='50%'
                justify='center'
                mx='auto'
                my={{base:'', md:'17vh'}}
                p={3}
                borderRadius='md'
                className='z-1'
            >
                <Box className='absolute '>
                    <Icon onClick={onClose} as={icon}
                          className='mx-[28rem] cursor-pointer z-2 text-[2rem] mt-[-1rem] text-green-400'/>
                </Box>
                <Stack mb={'20px'}>
                    <h1 className='font-semibold text-[1.3rem] text-green-400 flex flex-end'>{title}</h1>
                    <Text>{text}</Text>
                </Stack>
                <SimpleGrid columns={2} spacingX='20px' spacingY='40px'>
                    <Input placeholder='Name of Property' />
                    <Input placeholder='Location of Property' />
                    <Input placeholder='Price of Property' />
                    <Input placeholder='Area sqft' />
                </SimpleGrid>
                <Flex  gap={4} mt='2rem'>
                    <Button _hover={{bg:'tomato'}} size='md' colorScheme='red' onClick={onclick}>Cancel</Button>
                    <Button onClick={onclick} size='md' variant='outline' colorScheme='green' className=''>Save</Button>
                </Flex>
            </Box>
        </Box>
    );
}

export default Modals;
