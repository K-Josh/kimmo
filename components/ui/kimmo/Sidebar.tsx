"use client"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Footer from './Footer'

const Sidebar = ({user}: SidebarProps) => {
    const pathname = usePathname()
  return (
    <section className='sidebar'>
     <nav className='flex flex-col gap-4'>
         <Link href='/'>
            <Image
             src='/icons/logo.svg'
             alt='logo'
             width={74}
             height={74}
            />
         </Link>
      {sidebarLinks.map((item) => {
        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
        return (
            <Link key={item.label} 
               href={item.route}
               className={cn('sidebar-link', {'bg-secondary transition-all ease-in-out duration-500 translate-x-4' : isActive})}>
                <div className='relative size-6'>
                    <Image 
                      className={cn({'brightness-[3] invert-0': isActive})}
                      src={item.imgUrl} alt={item.label} fill /> 
                </div>
                <p className={cn('sidebar-label', {'!text-white': isActive})}>
                    {item.label}
                </p>
            </Link>
        )
      })}
     </nav>

     <Footer user={user} />
    </section>
  )
}

export default Sidebar
