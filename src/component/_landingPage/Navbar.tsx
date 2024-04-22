"use client"
import React from 'react';
import {
    Box, Button, Collapse,
    Flex, IconButton, Link,
    Stack, Text,
    useColorModeValue, useDisclosure
} from "@chakra-ui/react";
import {HamburgerIcon, CloseIcon, Icon} from "@chakra-ui/icons"
import {MdArrowOutward} from "react-icons/md";
import {ButtonElement} from "@/component/subComponents/buttonComponent";

export default function Navbar() {
    const {isOpen, onToggle} = useDisclosure();
    return (
        <>
            <Flex
                className='text-[#fff]'
                py={{base: 3}}
                px={{base: 4, sm:2}}
                align={'center'}
            >
                <Flex
                    flex={{base: 1, md: 'auto'}}
                    ml={{sm: 1}}
                    display={{base: 'flex', md: 'none'}}
                >
                    <IconButton
                        onClick={onToggle}
                        size='md'
                        _hover={{bg: 'green.500'}}
                        aria-label={'Toggle'}
                        icon={isOpen ? <CloseIcon color={'white'} w={2} h={2} />
                            : <HamburgerIcon color={'white'} w={2} h={2} />}/>
                </Flex>
                <Flex
                    flex={{base: 1}} mx={{base: 'auto'}}
                    align={{md: 'center'}} justify={{base: 'center', md:'start'}}
                    justifyContent={{md: 'space-between'}}>
                    <Text fontWeight={500} fontSize={{base: '0.8rem', md: '2rem'}} className='whitespace-nowrap uppercase'>
                        Kimmo Deals
                    </Text>
                    <Flex
                        className='relative mx-0 md:mx-[14rem]'
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
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={4}
                >
                    <Button
                        as={'a'}
                        fontSize={'sm'}
                        fontWeight={300}
                        href={'#'}
                        color={'blackAlpha.300'}
                        px={4}
                    >
                        <Text fontSize={{base: '1rem', md: '1.3rem'}}>Login/register</Text>
                    </Button>
                    <ButtonElement label='Add Property' icon={MdArrowOutward} />
                </Stack>
            </Flex>
                <Collapse in={isOpen} transition={{exit: {delay: 1}, enter: {duration: 0.5}}} animateOpacity><MobileNav /></Collapse>

        </>

    );
}



export const DesktopNav = () => {
    const linkColor = useColorModeValue('green.600', 'green.300');
    const linkHoverColor = useColorModeValue('green.800', 'white');
    return (
        <Stack direction={'row'} spacing={5}>
            {NAV_Items.map((navItem) => (
                <Box alignItems={'center'}
                     justifyContent={'center'}
                     gap={1}
                    display={{base:'flex', md:'flex'}}
                     key={navItem.label}>
                    <Link
                        gap={8}
                        fontWeight={400}
                        _hover={{textDecoration: 'none'}}
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
      <Stack p={2} className='w-[100vw] z-1' bg={useColorModeValue('blackAlpha.700','white')}>
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
           href={href ?? '#'}
          >
            <Text fontWeight={400} color={useColorModeValue('white', 'green.500')}>
                {label}
            </Text>
          </Flex>
      </Stack>
    );
}

interface NavItem {
    label: string,
    children?: Array<NavItem>,
    href?: string,
}
const NAV_Items: Array<NavItem> = [
    {
        label: 'home',
        href: '#'
    },
    {
        label: 'listings',
        href: '#'
    },
    {
        label: 'blog',
        href: '#'
    },
    {
        label: 'pages',
        href: '#'
    }
]

