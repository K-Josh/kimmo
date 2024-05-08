"use client"
import React, { useRef, useState, useEffect } from 'react';
import { Avatar, Box, Container, Stack, Text } from "@chakra-ui/react";
import { avatars, testimonialS,  } from '../Data/testimonials';
import { motion } from 'framer-motion';
import { Testimonial } from '@/Types/Testimonials';
import Image from 'next/image';

interface TestimonialProps {
  testimonialS: Testimonial[];
}

function Testimonials({ testimonials }: TestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialS.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 8000); // Autoplay every 8 seconds
    intervalRef.current = intervalId;

    return () => clearInterval(intervalId);
  }, [testimonialS]);

  return (
    <Container id="testimonials" minHeight={{ sm: '', md: '85vh' }} maxW="md">
      <Box className="mb-[2rem] gap-4 flex flex-col justify-center items-center mx-auto">
        <Text className="font-semibold" fontSize={{ md: '2rem', sm: '1rem' }}>
          Testimonials
        </Text>
        <Image 
          width={25} 
          height={25} 
          src='/quote.png' 
          alt='quote' />
      </Box>
      <motion.div 
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       transition={{ duration: 1 }}
       className='flex gap-5'
      >
      <div 
      className="justify-center items-center gap-3">
        {testimonialS.map((testimony, index) => (
          <Stack
            key={testimony.id}
            className="flex absolute justify-center overflow-hidden" // Prevent overflow within each Stack
          >
            <Box
             visibility={currentIndex === index ? 'visible' : 'hidden'}
              className='gap-4 flex flex-col items-center'
            >
              <div>
                <Text
                  width={{ sm: '', md: '30rem' }}
                  fontSize={{ sm: '12px', md: '15px' }}
                  className="font-semibold"
                >
                  {testimony.text}
                </Text>
              </div>
              <div className="flex flex-col items-center">
                <Text fontSize="13px" className="font-bold">
                  {testimony.name}
                </Text>
                <Text className='text-gray-400' fontSize="15px">{testimony.position}</Text>
              </div>
            </Box>
          </Stack>
        ))}
      </div>
      {/* avatars displayed with names */}
      {avatars.map((avatar, index) => (
          <Box key={avatar.id} className="flex items-center mx-auto relative transition-all ease-in duration-600"
           mt={{sm:'10rem', md:'15rem'}}
          >
            <Avatar
              size={'md'}
              className={`${currentIndex === index ? 'scale-100 translate-y-[-18px] opacity-100' : 'translate-y-0 blur-sm '} transition-all ease-in-out duration-500 cursor-pointer`}
              name={avatar.name}
            />
          </Box>
        ))}
      </motion.div>
    </Container>
  );
}

export default Testimonials;