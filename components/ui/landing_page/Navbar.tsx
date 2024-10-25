"use client"
import React, { useEffect, useState } from 'react'
import { navbarLinks } from '../../../constants/index';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

function Navbar({user}: NavItemProps) {
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
        const isActive = false
          return (
            <Link 
               key={navs.label} 
                 href={navs.href}
                 scroll={false}
                 className='navbar-link'>
              <p className={cn('navbar-label', {'!text-secondary bg-white w-full, rounded-sm': isActive})}>
                {navs.label}
              </p>
           </Link> 
          )
      })}
     </div>

     {user ? (
       <div className='flex items-center gap-4'>
         <Image src='/icons/notification.svg' alt='bell' width={25} height={25} className={cn({'brightness-[3] invert-0': isActive})} />
         <Image src='/icons/cart.svg' alt='bell' width={30} height={30} className={cn({'brightness-[3] invert-0': isActive})} />
         <p className='text-gray-600 text-xl font-bold footer_name'>{user.name[0]}</p>
       </div>
       ) :
        (
      <Link href='/sign-up'>   
       <Button className='bg-secondary h-[2.5rem] w-[7rem] text-16 rounded !text-primary hover:bg-orange-400'>
        Sign up
       </Button>
      </Link>
        )
       } 
    </nav>
   </section> 
  )
}

export default Navbar