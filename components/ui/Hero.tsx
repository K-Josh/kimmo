import Image from 'next/image'
import React from 'react'
import { Button } from './button'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='hero relative'>
            <Image 
              src='./icons/home.svg' alt='hero' 
              className='hero-image object-cover'
              width={500}
              height={100}
              loading='lazy' />
            <div className='bg-black-1 absolute top-0 left-0 w-full h-[85vh] bg-opacity-50 z-[2] md:z-[5] '/>

        <div className='md:relative mt-[-12rem] md:mt-[-24rem] mx-[5rem] md:mx-[9.5rem] space-y-4 text-white md:z-[6] '>
            <p className='header-2'>Find Your <span className='text-secondary font-roboto font-extrabold'>Dream Property </span>With Us At the comfort of your home</p>
            <p className='text-12 md:text-18 md:w-[34rem]'>
            Welcome to Kimmo Deals, your trusted source for buying and selling properties. 
            </p>

           <Link id='cta' href='/'>   
            <Button className='bg-secondary h-[2.5rem] text-18 rounded !text-primary hover:bg-orange-400 mt-2'>Contact Us</Button>
          </Link> 
        </div>
    </div>
  )
}

export default Hero