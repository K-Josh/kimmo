"use client"
import Image from 'next/image'
import AOS from "aos"
import "aos/dist/aos.css"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { Button } from './button'

const Feature = () => {
  useEffect(() => {
    AOS.init({})
  })
  return (
    <section id='feature' className='mt-[22vh] min-h-[90vh]'>
      <div className='flex flex-col md:flex-row item-center space-x-[4rem]'>

        <div data-aos-duration="1000" 
           data-aos="fade-right"  
            className='flex-col items-center justify-center space-y-[2rem] '>
           <div>
            <p className='font-thin text-secondary text-14'>Discover</p>
              <h1 className='header-3 w-[20] capitalize'>Unlock the potential of your property</h1>
              <p className='md:w-[38rem] font-montserrat text-16 font-normal'>At Kimmo Deals, we offer an extensive range of property listings to help you find your dream property. Our expert management team ensures a seamless buying experience, and our excellent customer service is always there to assist you.</p>
           </div>

            <div className='flex space-x-4 items-end'>
              <div className='flex flex-col gap-2'>
                <Image src='/icons/solutions.svg' alt='' width={80} height={80} />
                <h3 className='font-montserrat font-semibold text-[1rem]'>Effecient Solutions</h3>
                <p className='md:w-[19rem] text-16'>Save time and effort with our effecient property management and sales solutions.</p>
              </div>
              <div className='flex flex-col gap-2'>
                <Image src='/icons/assist.svg' alt='' width={80} height={80} />
                <h3 className='font-montserrat font-semibold text-[1rem]'>Expert Assisstance</h3>
                <p className='md:w-[19rem] text-16'>Get expert assistance and guidance throughout the property management and sales process.</p>
              </div>
            </div>

             <div>
                <Link id='cta' href='/'>   
                 <Button className='bg-secondary h-[3rem] w-[9rem] rounded !text-primary hover:bg-orange-400 text-16'>
                  Contact us
                </Button>
              </Link>
            </div>
        </div>

        <div data-aos="fade-left"
             className='h-48 w-48 md:h-[28rem] md:w-[40rem]'>
          <Image src='/icons/agent.svg' alt='agent' layout='fill' loading='lazy' className='rounded cursor-pointer hover:scale-95 transition-all ease-out duration-500 object-cover' />
        </div>  
      </div>
    </section>
  )
}

export default Feature