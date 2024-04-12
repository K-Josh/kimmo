import {Box, Flex, Stack, Image, Text, IconButton} from "@chakra-ui/react";
import {MdArrowOutward, MdOutlineBookmarkBorder} from "react-icons/md";
import React from "react";
import {ButtonElement, ListingButton} from "@/component/subComponents/buttonComponent";
import {AiOutlineThunderbolt} from "react-icons/ai";
import {LiaBathSolid, LiaBedSolid} from "react-icons/lia";
import {IoMdHeartEmpty} from "react-icons/io";
import {RiShareForwardBoxLine} from "react-icons/ri";
import {GrMapLocation} from "react-icons/gr";

export interface CardProps {
    title?: string;
    text?: string;
    tags?: string;
    link?: string;
    properties_1?: string;
    properties_2?: string;
    icon?: any;
    price?: string;
    id?: string;
    image?: string | object | undefined;
}
export function CardElement({title, text, image}: CardProps) {
    return(
        <Box width={{base:'10rem', md:'30rem'}}
             className=''>
            <Box >
                <Stack spacing={3} className='relative'>
                    <Text width={'11rem'} className='font-bold' >{title}</Text>
                    <Text mx={{base:'-2rem'}} width={{base:'16rem', md:'18rem'}} className='font-light'>{text}</Text>
                    <ButtonElement label='How it works' icon={MdArrowOutward} />
                </Stack>
               <Box className='relative' my={{base:'', md:'4rem'}}>
                   <Image
                       boxSize={{base:'xl', md:'2xl'}}
                       className='md:mx-[1rem] mx-[2rem] my-[-2rem] md:my-[-3rem] h-[14rem] md:h-[18rem] '
                       src={image} alt='agent' />
               </Box>
            </Box>
        </Box>
    )
}

export function ListingCard({title, text, icon, perimeter,
                                image, tags, properties_1, link,
                                properties_2, price}: CardProps) {

    return (
        <Box width={{base:'16rem', md:'18rem'}}
             height={'23rem'}
            className='border border-1 rounded-md'>
            <a href={link}>
                <Box className='relative'>
                    <Box my={{base:'0.7rem', md:'1rem'}} mx={{base:'0.5rem', md:'1rem'}} className='absolute p-3'>
                        <ListingButton label='Features' icon={AiOutlineThunderbolt} />
                    </Box>
                    <Image
                        boxSize={{base:'sm', md:'md'}}
                        className='h-[13rem] rounded-t-md'
                        src={image} alt='agent' />
                    <Box my='-3.2rem' mx={{base:'11rem', md:'12rem'}} className='p-3 absolute'>
                        <Text className='rounded-md p-1 border border-1 hover:duration-500 transition-all
                          cursor-pointer bg-[#fff] whitespace-nowrap w-[4rem]'>{price}</Text>
                    </Box>
                </Box>
                <Stack my={'-0.9rem'} p={3} spacing={3} className='relative'>
                    <Text width={{base:'', md:'11rem'}} className='font-bold whitespace-nowrap' >
                        {title}
                    </Text>
                    <Text width={{base:'', md:'18rem'}} className='font-light'>
                        {text}
                    </Text>
                    <Flex gap={{base: '1rem'}}>
                        <Flex alignItems={'center'} gap={1}>
                            <Image src={icon} alt='bed' as={LiaBedSolid} />
                            <Text className='font-light whitespace-nowrap text-[12px]'>
                                {properties_1}
                            </Text>
                        </Flex>
                        <Flex alignItems={'center'} gap={1}>
                            <Image src={icon} alt='bath' as={LiaBathSolid}/>
                            <Text className='font-light whitespace-nowrap text-[12px]'>{properties_2}</Text>
                        </Flex>
                        <Flex alignItems={'center'} gap={1}>
                            <Image src={icon} alt='bath' as={LiaBathSolid}/>
                            <Text className='font-light whitespace-nowrap text-[12px]'>{perimeter}</Text>
                        </Flex>
                    </Flex>
                    <div className='w-[15rem] my-2 h-[1px] rounded-sm bg-gray-200'></div>
                    <Flex justify={'space-between'}>
                        <div><Text className='font-light text-[1rem] cursor-pointer'>{tags}</Text></div>
                        <Flex gap={2}>
                            <Image src={icon} alt='heart' className='cursor-pointer' as={IoMdHeartEmpty} />
                            <Image src={icon} alt='heart' className='cursor-pointer' as={MdOutlineBookmarkBorder} />
                            <Image src={icon} alt='heart' className='cursor-pointer' as={RiShareForwardBoxLine} />
                        </Flex>
                    </Flex>
                </Stack>
            </a>
        </Box>

    )
}

export function MapCard({icon, image, title, properties_1}: CardProps) {
    return (
        <Box width={{base:'16rem', md:'20rem'}}
             justifyContent={{base:'center'}}
             alignItems={{base: 'center'}}
             height={{base:'20rem' ,md:'23rem'}}>
            <Box className='absolute
                justify-center bg-blue-500 h-[10rem] align-center z-2'></Box>
            <Box className='relative'>
                  <Image src={image} className='h-[13rem] rounded-md z-[-1]'
                         alt='map' />
                <Image src={icon}
                       my='-7rem'
                       mx='6rem'
                       className='cursor-pointer rounded-full bg-white p-1 text-[#008374] w-7 h-7 absolute'
                       as={GrMapLocation} />
            </Box>

            <Box className='p-2'>
                <Text className='font-semibold'>{title}</Text>
                <Text className='font-light text-[12px]'>{properties_1}</Text>
            </Box>
        </Box>
    )
}
