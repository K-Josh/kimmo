import {Box, Button, Collapse, Flex, IconButton, Stack, Text, useColorModeValue, useDisclosure} from "@chakra-ui/react";
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";
import {ButtonElement} from "@/component/subComponents/buttonComponent";
import {MdArrowOutward} from "react-icons/md";
import React from "react";
import {DesktopNav, MobileNav} from "@/component/_landingPage/Navbar";

export function NewWindowNavbar() {
    const {isOpen, onToggle} = useDisclosure();
    return (
        <Box width={'100%'} className='relative fixed mt-0 top-0'>
            <Flex
                py={{base: 3}}
                px={{base: 4}}
                align={'center'}
            >
                <Flex
                    flex={{base: 1, md: 'auto'}}
                    ml={{sm: 2}}
                    display={{base: 'flex', md: 'none'}}
                    className='gap-[1rem]'
                >
                    <IconButton
                        onClick={onToggle}
                        variant='none'
                        aria-label={'Toggle'}
                        icon={isOpen ? <CloseIcon className='text-1rem' color={'white'} w={2} h={2} />
                            : <HamburgerIcon className='text-1rem' color={'white'} w={2} h={2} />}/>
                </Flex>
                <Flex
                    flex={{base: 1}} mx={{base: 'auto'}}
                    align={{md: 'center'}} justify={{base: 'center', md:'start'}}
                    justifyContent={{md: 'space-between'}}>
                    <Text fontWeight={500} fontSize={{base: '0.8rem', md: '2rem'}} className='text-white whitespace-nowrap uppercase'>
                        Kimmo Deals
                    </Text>
                    <Flex
                        className='relative text-white mx-0 md:mx-[14rem]'
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
                        variant={'link'}
                        href={'#'}
                        color={'WhiteAlpha.300'}
                        px={4}
                    >
                        <Text fontSize={{base: '1rem', md: '1.2rem'}} className='text-black/70'>Login/register</Text>
                    </Button>
                    <ButtonElement label='Add Property' icon={MdArrowOutward} />
                </Stack>
            </Flex>
            <Collapse in={isOpen} transition={{exit: {delay: 1}, enter: {duration: 0.5}}} animateOpacity><MobileNav /></Collapse>

        </Box>

    );
}
