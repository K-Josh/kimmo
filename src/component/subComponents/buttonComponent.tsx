"use client"
import React, {useState} from 'react';
import {
    Button, IconButton,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react'
import Modals from "@/component/modals/Modals";
import {IoClose} from "react-icons/io5";
import {Icon} from "@chakra-ui/icons";
import {MdArrowOutward} from "react-icons/md";

interface ButtonProps {
    label: string;
    icon?: any;
    ref?: any;
    onClick?: () => void;
}

export function ButtonKimmo({label}: ButtonProps) {
    return (
        <Button 
          width={{base:'4rem', md:'6rem'}}
          height={{base:'2rem', md:'2.4rem'}}
          color='#ffff'
          fontSize={'13px'}
          _hover={{bg:'orange.400'}}
           className='bg-tertiary'
       >
        {label}
      </Button>
    )
}
export function ButtonSearch({label}: ButtonProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button 
          width={{base:'4rem', md:'6rem'}}
          height={{base:'2rem', md:'2.4rem'}}
          color='#ffff'
          fontSize={'13px'}
          _hover={{bg:'orange.400'}}
           className='bg-tertiary'
           onClick={onOpen}
       >
        {label}
      </Button>
       <Modal
       isCentered
       onClose={onClose}
       isOpen={isOpen}
       motionPreset='slideInBottom'
     >
       <ModalOverlay bg='blackAlpha.300'
           backdropFilter='blur(10px) hue-rotate(90deg)'/>
       <ModalContent>
         <ModalHeader>Search Property</ModalHeader>
         <ModalCloseButton />
         <ModalBody>
           <Input focusBorderColor='orange.500' type='search' placeholder='search desired property' borderColor='gray.400' className='rounded-full' />
         </ModalBody>
         <ModalFooter>
           <Button variant='outline' colorScheme='red.600' color='red' fontSize='sm' mr={3} onClick={onClose}>
             Close
           </Button>
           <Button color='white' fontSize='sm' className='bg-tertiary' _hover={{bg:'orange.400'}}>Search</Button>
         </ModalFooter>
       </ModalContent>
     </Modal>    
    </>
    )
}
export function ButtonVariant({label}: ButtonProps) {
   
    return (
        <Button
        width={{base:'4rem', md:'6.5rem'}}
        height={{base:'2rem', md:'2.4rem'}}
        colorScheme='#DE6F19'
        variant='outline'
        className='text-tertiary'
        >
           {label}
       </Button>
     
    )
}

export function ButtonElement({label, icon, ref, onclick}: ButtonProps) {
    const [showModal, setShowModal] = useState(false)
    return (
      <>
        <Button
            spacing={4}
            as={'a'}
            display={{base: 'none', md:'inline-flex'}}
            fontSize='12px'
            href={'#'}
            color={'white'}
            colorScheme='none'
            width={{base:'5rem', md:'7rem'}}
            borderRadius={'4px'}
            className='cursor-pointer rounded-full p-2 hover:shadow-sm border border-sm border-white'
            onClick={() => setShowModal(true) && onclick}>
            {label}
            <span>{icon && <Icon size={'10px'} as={icon}/>}</span>
        </Button>
          {showModal && <Modals title='Add property' icon={IoClose}
                                onClose={() => setShowModal(false)}/>}
    </>
    );
}

export function ListingButton({onclick, icon, label}: ButtonProps) {
    return (
        <Button
            as={'a'}
            display={{base: 'inline-flex', md:'inline-flex'}}
            fontSize={'sm'}
            href={'#'}
            color={'white'}
            width={{base:'4.8rem', md:'5rem'}}
            height='2rem'
            bg={'#F58629'}
            _hover={{bg: '#F58619'}}
            borderRadius={'4px'}
            className='hover:shadow-sm'
            onClick={onclick}>
            <span>{icon && <Icon size={'10px'} as={icon}/>}</span>
            {label}
        </Button>
    )
}

export function LandsButton({label}: ButtonProps) {
    return(
      <Button
          display={{sm:'none', md:'inline-flex'}}
          fontSize={'sm'}
          color={'white'}
          p={1}
          width={{base:'4.8rem', md:'5rem'}}
          bg={'#F58629'}
          _hover={{bg: '#F58619'}}
          borderRadius={'4px'}
          >
          {label}<sup>2</sup>
      </Button>
    );
}

export function PricingButtonActive({label, onclick}: ButtonProps) {
    return <Button
                spacing={2}
                fontSize={'sm'}
                href={'#'}
                color={'white'}
                p={{sm:'0.5rem', md:'1rem'}}
                bg={'#F58629'}
                _hover={{bg: '#F58619'}}
                borderRadius={'4px'}
                className='cursor-pointer hover:shadow-sm'
                onClick={onclick}>
                {label}
                <span>
                     <IconButton aria-label='up arrow' colorScheme='none'
                                 icon={<MdArrowOutward className='text-[#ffff]' />} />
                </span>
            </Button>
}



