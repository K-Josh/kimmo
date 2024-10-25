"use client"
import Image from 'next/image';
import React from 'react';

function Footer() {
    return (
        <section className='footer min-h-[22rem] md:min-h-[24rem]'>
            {/*header in footer*/}
            <footer className='grid grid-cols-3 md:flex space-x-2 space-y-4 md:flex-row md:justify-between items-start '>
              <div>
                <Image 
                    src="/icons/logo.svg"
                    alt='logo'
                    width={74}
                    height={74}
                    className='bg-white rounded-full p-2 w-[5rem]' />
              </div>
                  {/* <div className='flex justify-center items-center gap-2'>
                      <p className='text-[12px] whitespace-nowrap font-semibold md:text-sm'>
                          Follow Us
                      </p>
                      <div className='flex md:gap-3 gap-1'>
                          <Icon as={FaFacebookF} className='text-white text-[12px] md:text-[14px]'/>
                          <Icon as={FaTwitter} className='text-white text-[12px] md:text-[14px]'/>
                          <Icon as={FaInstagram} className='text-white text-[12px] md:text-[14px]'/>
                          <Icon as={FaLinkedinIn} className='text-white text-[12px] md:text-[14px]'/>
                      </div>
                  </div> */}
              
           
        {/*  main content  */}
      {/* 1st row */}

                 <div className='space-y-[10px] footer-labels'>
                    <p className='font-semibold'>Popular Search</p>
                    <p>Apartment for Sale</p>
                    <p>Apartment for Rent</p>
                    <p>Offices for sale</p>
                    <p>Offices for Rent</p>
                </div>
                <div className='space-y-[10px] footer-labels'>
                    <p className='font-semibold'>Quick Links</p>
                    <p>Terms of use</p>
                    <p>Privacy Policy</p>
                    <p>Pricing Plans</p>
                    <p>Our Services</p>
                </div>
                <div className='space-y-[10px] footer-labels'>
                    <p className='font-semibold'>Customer Support</p>
                    <p>Contact</p>
                    <p>FAQs</p>
                </div>
    
                 <div className='space-y-[1rem]'>
                  <p className='text-14 md:text-16 whitespace-nowrap font-semibold'>
                        Keep yourself Up to Date
                  </p>
                   <input 
                     placeholder='Your email'
                      className='input-class p-1 rounded'
                       type='email' />
                 </div>
          </footer>  
            <div className='flex justify-between p-[1rem] md:p-[3rem] mt-[2rem] md:mt-[5rem] '>
                <h1 className='md:text-[10px] text-[8px] whitespace-nowrap'>Kimmo-All rights reserved</h1>
                    <div className='footer-label_two'>
                        <p>Privacy</p>
                        <p>Terms </p>
                        <p>Sitemap</p>
                    </div>
            </div>

            <div className='mt-[-10rem] md:mt-[-2rem]' >
                <Image src='/icons/footer.svg' width={300} height={300} className='footer-img' alt='building' />
            </div>
         
     </section>
    );
}

export default Footer;
