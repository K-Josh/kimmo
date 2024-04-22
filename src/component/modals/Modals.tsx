"use client"
import React, {useRef, useState} from 'react';
import {Box, Button, Input, Text, SimpleGrid, Stack, Flex} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/icons";
import toast, {Toaster} from "react-hot-toast";
import { useRouter } from 'next/navigation'


interface ModalProps {
    title: string;
    text?: string;
    icon?: any;
    onClick?: () => void;
    onClose?: any;
}

function Modals({icon, onclick, title, text, onClose}: ModalProps) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('')
    const [area, setArea] = useState('');
    const modalRef = useRef();
    const router = useRouter();

    const closeModal = (e) => {
        if(modalRef.current === e.target){
            onClose();
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!name || !price || !location) {
            toast.error(<b>please input the required field *</b>)
            return ;
        }
        try {
            const res = await fetch("http://localhost:3000/api/cards", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({name, location, price, area}),
            });

            if (res.ok) {
                router.push("/lands/")
            } else {
                throw new Error("Failed to create a Card")
            }
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <Box ref={modalRef} onClick={closeModal} width={{sm:'90vw', md:'100%'}}
             height={{sm:'100vh', md:'screen'}}
             className='fixed z-10 inset-0 bg-[#1e1e1e] bg-opacity-30 backdrop-blur-sm'>
            <Box
                bg={'white'}
                width={{sm:'75%',md:'40%'}}
                height={{sm:'70%',md:'50%'}}
                justify='center'
                mx={{sm:'4vw',md:'auto'}}
                my={{base:'10vh', md:'17vh'}}
                p={3}
                borderRadius='md'
                className='z-1'
            >
                <Box className='absolute '>
                    <Icon onClick={onClose} as={icon}
                          className='mx-[28rem] cursor-pointer z-2 text-[2rem] mt-[-1rem] text-green-400'/>
                </Box>
                <Stack mb={'20px'}>
                    <h1 className='font-semibold text-[1.3rem] text-orange-500 flex flex-end'>{title}</h1>
                    <Text>{text}</Text>
                </Stack>
                <SimpleGrid columns={{sm:1, md:2}} spacingX='20px' spacingY={{sm:'20px',md:'40px'}}>
                    <label className='text-red-400 absolute ml-[13rem]'>*</label>
                    <Input focusBorderColor='orange.500' type='text' color='gray.600' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name of Property' />
                    <label className='text-red-400 absolute ml-[29rem]'>*</label>
                    <Input focusBorderColor='orange.500' type='text' color='gray.600' value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Location of Property' />
                    <label className='text-red-400 absolute mt-[5rem] ml-[13rem]'>*</label>
                    <Input focusBorderColor='orange.500' type='number' color='gray.600' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price of Property' />
                    <Input focusBorderColor='orange.500' type='text' color='gray.600' value={area} onChange={(e) => setArea(e.target.value)} placeholder='Area sqft' />
                </SimpleGrid>
                <Flex  gap={4} mt='2rem'>
                    <Button _hover={{bg:'tomato'}} size='md' colorScheme='red' onClick={onClose}>Cancel</Button>
                    <Button onClick={handleSubmit} isLoading loadingText='Submitting'
                            size='md' variant='outline' colorScheme='orange'>Save</Button>
                    <Toaster />
                </Flex>
            </Box>
        </Box>
    );
}

export default Modals;
