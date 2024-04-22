import React, {useState} from 'react';
import {
    Button, IconButton,
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
export function ButtonElement({label, icon, ref, onclick}: ButtonProps) {
    const [showModal, setShowModal] = useState(false)
    return (
      <>
        <Button
            spacing={4}
            as={'a'}
            display={{base: 'none', md:'inline-flex'}}
            fontSize={'sm'}
            href={'#'}
            color={'white'}
            width={{base:'5rem', md:'7rem'}}
            bg={'#1e1e1e'}
            _hover={{bg: '#F58629'}}
            borderRadius={'4px'}
            className='cursor-pointer hover:shadow-sm'
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
            spacing={4}
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
export function PricingButton({label, onclick}: ButtonProps) {
    return <Button
                spacing={2}
                fontSize={'sm'}
                href={'#'}
                color={'blackAlpha.400'}
                p={{sm:'0.5rem', md:'1rem'}}
                variant='outline'
                colorScheme='#F58629'
                _hover={{bg: '#F58619'}}
                borderRadius={'4px'}
                className='hover:shadow-sm'
                onClick={onclick}>
                {label}
                <span>
                     <IconButton aria-label='up arrow' colorScheme='none'
                                 icon={<MdArrowOutward className='text-[#fff]' />} />
                </span>
            </Button>
}


