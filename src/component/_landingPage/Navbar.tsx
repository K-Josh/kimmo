"use client"
import React, { useEffect, useState } from 'react';
import {
    Box, Button, Collapse, Container,
    Flex, IconButton,
    Stack, Text,
    useColorModeValue, useDisclosure
} from "@chakra-ui/react";
import {HamburgerIcon, CloseIcon, Icon} from "@chakra-ui/icons"
import {MdArrowOutward} from "react-icons/md";
import {ButtonElement} from "@/component/subComponents/buttonComponent";
import Link from 'next/link';

export default function Navbar() {
    const {isOpen, onToggle} = useDisclosure();
    const [header, setHeader] = useState(false);

    const scrollHeader = () => {
        if(window.scrollY >= 20) {
            setHeader(true);
        } else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)

        return () => {
            window.addEventListener('scroll', scrollHeader)
        }
    }, [])

    return (
        <Container className={header ? 'fixed bg-[#020202] flex flex-col md:flex-row md:justify-center z-10 min-w-[100%] text-white' : 'bg-transparent'} maxW='550px'>
            <Flex
                className='text-[#fff] items-center md:gap-[2rem] md:mx-[-9rem]'
                py={{base: 3}}
                px={{md: '1px', sm:2}}
                justify={'center'}
            >
                <Flex
                    flex={{base: 1, md: 'auto'}}
                    ml={{sm: 1}}
                    display={{base: 'flex', md: 'none'}}
                >
                    <IconButton
                        onClick={onToggle}
                        size='md'
                        bg={'#F58629'}
                        _hover={{bg: '#f39345'}}
                        aria-label={'Toggle'}
                        icon={isOpen ? <CloseIcon color={'white'} w={4} h={4} />
                            : <HamburgerIcon color={'white'} w={4} h={4} />}/>
                </Flex>
                <Flex
                    flex={{base: 1}} mx={{base: 'auto'}}
                    align={{md: 'center'}} justify={{base: 'center', md:'start'}}>
                    <Text fontWeight={500} fontSize={{base: '0.8rem', md: '2rem'}} className='md:gap-[2rem] whitespace-nowrap uppercase'>
                        Kimmo Deals
                    </Text>
                    <Flex
                        className='relative mx-0 md:mx-[2rem] md:gap-[2rem]'
                        display={{base: 'none', md: 'flex'}}
                        flex={{base: 1, md: 0}}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={8}
                    >
                        <DesktopNav />
                    </Flex>
                </Flex>
                <Stack
                    flex={{base: 1, md:0}}
                    direction={'row'}
                    spacing={4}
                >
                    <Button
                        as={'a'}
                        fontSize={'sm'}
                        fontWeight={300}
                        colorScheme='none'
                        href={'#'}
                        color={'whiteAlpha.900'}
                        px={4}
                    >
                        <Text fontSize={{base: '1rem', md: '0.9rem'}}>Login/register</Text>
                    </Button>
                  <ButtonElement label='Add Property' icon={MdArrowOutward} />
                </Stack>
            </Flex>
                <Collapse in={isOpen} transition={{exit: {delay: 1}, enter: {duration: 0.5}}} animateOpacity><MobileNav /></Collapse>

        </Container>

    );
}

export const DesktopNav = () => {
   
    return (
        <Stack direction={'row'} spacing={5}>
            {NAV_Items.map((navItem) => (
                <Box alignItems={'center'}
                     gap={1}
                    display={{base:'flex', md:'flex'}}
                     key={navItem.label}>
                    <Link
                     href={`/${navItem.href}`}
                     scroll
                     prefetch
                      className='gap-7 link_active font-light hover:no-underline cursor-pointer'
                        >{navItem.label}
                    </Link>
                    <Box className=' w-[0.4rem] h-[3px] bg-[#fff]' />
                </Box>
            ))}
        </Stack>
    );
}

export const MobileNav =() => {
    return (
      <Stack p={2} className='w-full items-center rounded-md z-2'>
          {NAV_Items.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
          ))}
      </Stack>
    );
}

const MobileNavItem = ({label, href}: NavItem) => {
    return(
      <Stack spacing={4}>
          <Flex
            py={3}
            justify={'space-between'}
            align={'center'}
            _hover={{textDecoration: 'none'}}
           as={Link}
           href={href}
          >
            <Text fontWeight={400} className='hover:text-[#F58629] hover:transition-all hover:duration-400 width-full' color={useColorModeValue('white', 'green.500')}>
                {label}
            </Text>
          </Flex>
      </Stack>
    );
}

interface NavItem {
    label?: string,
    children?: Array<NavItem>,
    href?: string,
}
const NAV_Items: Array<NavItem> = [
    {
        label: 'home',
        href: '/'
    },
    {
        label: 'listings',
        href: '#listings'
    },
    {
        label: 'explore',
        href: '#explore'
    },
    {
        label: 'testimonials',
        href: '#testimonials'
    },
    {
        label: 'agents',
        href: '#agents'
    },
]

