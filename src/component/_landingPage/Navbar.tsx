"use client"
import React, { useEffect, useState } from 'react';
import {
    Box, Button, Collapse, Container,
    Flex, HStack, IconButton,
    Stack, Text,
    useColorModeValue, useDisclosure
} from "@chakra-ui/react";
import {HamburgerIcon, CloseIcon, Icon} from "@chakra-ui/icons"
import {MdArrowOutward} from "react-icons/md";
import {ButtonElement, ButtonKimmo, ButtonVariant} from "@/component/subComponents/buttonComponent";
import Link from 'next/link';
import Image from 'next/image';

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
        <Box className={header ? 'fixed bg-[#020202] flex flex-col md:flex-row md:justify-center z-10 min-w-[100%] text-white' : 'bg-transparent'} >
            <Flex
                className='text-[black] md:gap-[2rem]'
                py={{base: 3}}
                px={{md: '3rem', sm:2}}
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
                {/* logo div and desktop navs */}
                 <Box className='flex flex-col md:flex-row justify-between'>
                    <Box>
                        <Image src='/logo.png' alt='logo' width={100} height={100} />
                    </Box>
                     <Box display={'inline-flex'} gap={3}>
                        <DesktopNav />
                       <ButtonVariant label='Learn'/>
                        <ButtonKimmo label='Sign Up' />
                     </Box>
                 </Box>
            </Flex>
                <Collapse in={isOpen} transition={{exit: {delay: 1}, enter: {duration: 0.5}}} animateOpacity><MobileNav /></Collapse>

        </Box>

    );
}

export const DesktopNav = () => {
   
    return (
        <Stack direction={'row'}>
            {NAV_Items.map((navItem) => (
                <Box alignItems={'center'}
                     gap={1}
                    display={{base:'flex', md:'flex'}}
                     key={navItem.label}>
                    <Link
                     href={`/${navItem.href}`}
                     scroll
                     prefetch
                      className='text-sm whitespace-nowrap link_active font-light hover:no-underline cursor-pointer'
                        >{navItem.label}
                    </Link>
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
    // {
    //     label: 'home',
    //     href: '/'
    // },
    {
        label: 'Buy Property',
        href: '#listings'
    },
    {
        label: 'Sell Property',
        href: '#explore'
    },
    {
        label: 'Rent Property',
        href: '#testimonials'
    },
    {
        label: 'Services',
        href: '#agents'
    },
]

