"use client"
import Image from 'next/image'
import AOS from "aos"
import "aos/dist/aos.css"
import React, { useEffect } from 'react'
import Link from 'next/link'

const Listings = () => {
  useEffect(() => {
    AOS.init({})
  }, [])
  return (
    <section id='listings' className='flex justify-center min-h-[90vh] md:mt-[-8vh] mt-[8vh] mx-auto'>
      <div data-aos="fade-up-right" className='absolute md:left-[-18rem] left-[-15rem] top-[95rem] md:top-[72rem] md:w-[35rem] md:h-[35rem] w-[20rem] h-[20rem] rounded-full bg-gradient-to-br from-white to-secondary ' />
        
        <div className='flex-col mx-auto text-center space-y-[2rem]'>
             <div>
              <p className='font-thin text-secondary text-14'>Discover</p>
                <h1 className='header-3 capitalize'>Find Your Dream Property Today</h1>
                <p className='max-w-[42rem] font-montserrat text-16 font-normal text-center mx-auto'>At Kimmo Deals, we offer an extensive range of property listings to help you find your dream property. Our expert 
                management team ensures a seamless buying experience, and our excellent customer service is always there to 
                assist you</p>
             </div>

            <div className='flex flex-col md:flex-row space-y-4 md:space-x-[5rem] items-center'>
              {/* one */}
              <div data-aos-duration="2000" data-aos="flip-left" className='flex flex-col items-center text-center gap-2 cursor-pointer hover:scale-90 transition-all duration-500 ease-in-out'>
                <Image src='/icons/listings.svg' alt='' width={80} height={80} />
                <h3 className='font-montserrat font-semibold text-[1rem]'>Extensive Property Listings</h3>
                <p className='md:w-[19rem] w-[16rem] text-16'>Browse through our wide selection of properties.</p>
              </div>
              {/* two */}
              <div data-aos="flip-up" className='flex flex-col text-center items-center gap-2 cursor-pointer hover:scale-90 transition-all duration-500 ease-in-out'>
                <Image src='/icons/management.svg' alt='manage' width={80} height={80} />
                <h3 className='font-montserrat font-semibold text-[1rem]'>Expert Management</h3>
                <p className='md:w-[19rem] w-[16rem] text-16'>Get expert assistance and guidance throughout the property management and sales process.</p>
              </div>
              {/* three */}
              <div data-aos="flip-right" data-aos-duration="2000" className='flex flex-col items-center text-center gap-2 cursor-pointer hover:scale-90 transition-all duration-500 ease-in-out'>
                <Image src='/icons/customer.svg' alt='' width={80} height={80} />
                <h3 className='font-montserrat font-semibold text-[1rem]'>Exellent Customer Service</h3>
                <p className='md:w-[19rem] w-[16rem] text-16'>We are dedicated to providing top notch customer support</p>
              </div>
            </div>

            <div>
                <Link href='/sign up' className='!text-secondary font-semibold text-18'>   
                   Sign up
              </Link>
            </div>
        </div>

    </section>
  )
}

export default Listings