import React, {useRef} from 'react';
import {Box, Button, Text} from "@chakra-ui/react";

interface ReadProps {
    onclose: any;
}

function ReadMore({onclose}: ReadProps) {
    const modalRef = useRef()

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onclose()
        }
    }
    return (
        <Box ref={modalRef} onClick={closeModal} width={{sm:'90vw', md:'100%'}}
             height={'screen'}
             className='fixed z-10 inset-0 bg-[#1e1e1e] bg-opacity-30 backdrop-blur-sm'>
            <Box
                bg={'gray.300'}
                width={{sm:'73%',md:'55%'}}
                height={{sm:'80%',md:'65%'}}
                justify='center'
                mx={{sm:'4vw',md:'auto'}}
                my={{base:'10vh', md:'17vh'}}
                p={3}
                borderRadius='md'
                className='z-1'
            >
                <Text width={{sm:'18rem', md:'42rem'}} className='text-[#1e1e1e] font-light'>
                    The website has advanced search tools that allow users to filter results by their criteria.
                    The company also has a customer service team available to answer questions and help with the buying process.
                    The website is a platform for selling real estate land.
                    It brings together land for sale offers from different real estate agencies.
                    The goal is to facilitate the search for land for individuals and professionals looking for plots to build their house or business.
                    They work with trusted real estate agencies that offer quality land in different regions of Cameroon.
                    On the platform, you can easily find land for sale in a few clicks.
                    They provide advanced search tools that allow you to filter the results according to your search criteria.
                    They believe that buying land is an important step in everyone's life.
                    They have a customer service available to answer all your questions and support you throughout your search.
                    They are also there to help you understand the different steps of buying land and to advise you on the administrative procedures to follow.
                </Text>

               <Box className='flex justify-end mt-4 mx-[1.7rem]'>
                   <Button className='bg-orange-300 text-white' _hover={{bg:'orange.400'}}  onClick={onclose}>
                       Close
                   </Button>
               </Box>
            </Box>
        </Box>
    );
}

export default ReadMore;
