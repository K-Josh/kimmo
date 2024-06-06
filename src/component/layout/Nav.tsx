import {
    Box,
    Button,
    Collapse,
    Container,
    Flex,
    IconButton,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";
import {ButtonElement} from "@/component/subComponents/buttonComponent";
import {MdArrowOutward} from "react-icons/md";
import React from "react";
import {DesktopNav, MobileNav} from "@/component/_landingPage/Navbar";

export function NewWindowNavbar() {
    const {isOpen, onToggle} = useDisclosure();
    return (
        <Container MaxW='550px' className='relative fixed mt-0 top-0'>
            <Flex
                py={{base: 3}}
                mx={{base: '-1rem'}}
                align={'center'}
                className='md:gap-[4rem]'
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
                        icon={isOpen ? <CloseIcon className='text-1rem' color={'white'} w={4} h={4} />
                            : <HamburgerIcon className='text-1rem' color={'white'} w={4} h={4} />}/>
                </Flex>
            {/*Navbar for this particular page*/}
               <Box className='flex items-center justify-between md:gap-[13rem] '>
                   <Flex
                       flex={{base: 1}} mx={{base: 'auto', md:'-2rem'}}
                       align={{md: 'center'}} justify={{base: 'center', md:'start'}}
                       >
                       <Text fontWeight={500} fontSize={{base: '0.8rem', md: '2rem'}} className='text-white whitespace-nowrap uppercase font-bold'>
                           Kimmo Deals
                       </Text>

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
               </Box>
            </Flex>
            <Collapse in={isOpen} transition={{exit: {delay: 1}, enter: {duration: 0.5}}} animateOpacity><MobileNav /></Collapse>

        </Container>

    );
}
