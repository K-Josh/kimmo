'use client'
import React, { useEffect, useState } from 'react'
import { navbarLinks } from '../../constants/index';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname()
  const [header, setHeader] = useState(false)

  const isActive = header 

  const scrollHeader = () => {
    if(window.scrollY >= 20) {
        setHeader(true);
    } else {
        setHeader(false)
    }
}

useEffect(() => {
    window.addEventListener('scroll', scrollHeader)

    return () => {
        window.addEventListener('scroll', scrollHeader)
    }
}, [])

  return (
   <section className= {header ? 'w-full': 'w-full navbar'}> 
    <nav className={header ? 'navbar-scroll' : 'bg-transparent flex flex-col md:flex-row gap-4 items-center justify-between'}>
      <Link href='/' className={'cursor-pointer hover:animate-bounce'}>
        <Image 
         src="/icons/logo.svg"
         alt='logo'
         width={74}
         height={74}
         className={cn({'bg-white rounded-full p-2': isActive})}
        />
      </Link>

     <div className='flex bg-secondary space-x-4 rounded px-[2rem]'>
      {navbarLinks.map((navs) => {
        const isActive = pathname === navs.href 
          return (
            <Link 
               key={navs.label} 
                 href={navs.href}
                 scroll
                 prefetch={false}
                 className={cn('navbar-link', {'bg-white, rounded': isActive})}>
              <p className={cn('navbar-label', {'!text-secondary': isActive})}>
                {navs.label}
              </p>
           </Link> 
          )
      })}
     </div>

     <Link href='/sign-up'>   
       <Button className='bg-secondary h-[2.5rem] w-[7rem] text-16 rounded !text-primary hover:bg-orange-400'>
        Sign up
       </Button>
      </Link> 
    </nav>
   </section> 
  )
}

export default Navbar