"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const AuthForm = ({type}: {type: string}) => {
    const [user, setUser] = useState()
    
  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-4 md:gap-8'>
            <Image 
             src='/icons/logo.svg'
             alt='logo'
              width={100}
              height={100}
              />
            <div className='flex flex-col gap-1'>
            <h1 className='header-3 text-secondary'>
            {user ? 'Link Account' : type === 'sign-in'
                ? 'Sign In'
                : 'Sign Up'
            }
            </h1>
            <p className='text-16 text-gray-600'>
                {user ? 'Hello there Welcome! Sign Up to get the best features' : 'Please enter your details to Log in'}
            </p>
            </div>
        </header>

        <>
          
        </>
    </section>
  )
}

export default AuthForm