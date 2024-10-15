"use client"

import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './sheet'
import Image from 'next/image'
import Link from 'next/link'
import { navbarLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
    const pathname = usePathname()
  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger className='my-2'>
            <Image
              src='/icons/hamburger.svg'
              alt='menu'
              width={30}
              height={30}
              />
        </SheetTrigger>
        <SheetContent side="left" className='bg-white border-none'>
            <Link href='/' className='cursor-pointer'>
             <Image 
               src='/icons/logo.svg'
               alt='logo'
               width={74}
               height={74}
               />
            </Link>

            <div>
              <SheetClose asChild>
                <nav>
                  {navbarLinks.map((navs) => {
                     const isActive = pathname === navs.href || pathname.startsWith(`${navs.href}/`)
                     return (
                        <SheetClose asChild key={navs.href}>
                            <Link 
                              href={navs.href}
                              key={navs.label}
                              >
                                <p>{navs.label}</p>
                            </Link>
                        </SheetClose>
                     )
                  })}
                </nav>  
              </SheetClose> 
            </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
