import React, {useState} from 'react';
import {Icon} from "@chakra-ui/icons";
import {
    Button,
    useDisclosure
} from '@chakra-ui/react'
import Modals from "@/component/modals/Modals";
import {IoClose} from "react-icons/io5";

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
            width={{base:'', md:'9rem'}}
            bg={'#008374'}
            _hover={{bg: '#008364'}}
            borderRadius={'4px'}
            className='hover:shadow-sm'
            onClick={() => setShowModal(true) && onclick}>
            {label}
            <span>{icon && <Icon size={'10px'} as={icon}/>}</span>
        </Button>
          {showModal && <Modals title='Add property' icon={IoClose}
                                onClose={() => setShowModal(false)}/>}
    </>
    );
}

export function ListingButton({icon, onclick, label}: ButtonProps) {
    return (
        <Button
            spacing={4}
            as={'a'}
            display={{base: 'inline-flex', md:'inline-flex'}}
            fontSize={'sm'}
            href={'#'}
            color={'white'}
            width={{base:'4.8rem', md:'5rem'}}
            bg={'#008374'}
            _hover={{bg: '#008364'}}
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
          display={'inline-flex'}
          fontSize={'sm'}
          color={'white'}
          p={1}
          width={{base:'4.8rem', md:'5rem'}}
          bg={'#008374'}
          _hover={{bg: '#008364'}}
          borderRadius={'4px'}
          >
          {label}
      </Button>
    );
}


