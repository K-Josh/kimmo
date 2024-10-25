"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Form } from '../form'
import { authFormSchema } from '@/lib/utils'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import StandardInput from './StandardInput'
import { Button } from '../button'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { signIn, signUp } from '@/lib/actions/user.actions'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'

const AuthForm = ({type}: {type: string}) => {
    const [user, setUser] = useState();
    const [isLoading, setisLoading] = useState(false);
    const router = useRouter();

    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setisLoading(true)

        try {
          
          if(type === 'sign-up') {
            const newUser = await signUp(data);

            setUser(newUser)
            if(newUser) {
              toast.success('Welcome aboard 👋🏼!')
            } else {
              toast.error("Sign up failed. Please try again.")
            }
             router.push('/home')
          } else if(type === 'sign-in') {
            const res = await signIn({
              email: data.email,
              password: data.password,
            });
    
            if(res)  {
              toast.success('They match heres your personalized home page!');
              await router.push('/home')
            }  else {
              toast.error("Invalid credentials. Please try again.");
            }
              
            
          }

        } catch (error) {
          toast.error("Uh no something went wrong. Try again will ya")
          console.log(error);        
        } finally {
           setisLoading(false)
        }
    }
    
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
                {user ? 'Hello there Welcome! Sign Up to get the best features' : 'Please enter your details to continue'}
            </p>
            </div>
        </header>

        {user ? (<div>
          
        </div>) : (
        <>
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              {type === 'sign-up' && (
                 <>
                      <StandardInput 
                          control={form.control}
                          name='firstName'
                          label='First name'
                          placeholder='Enter first name'
                       />
                   <div className='flex gap-4'>
                      <StandardInput 
                          control={form.control}
                          name='lastName'
                          label='Last name'
                          placeholder='Enter last name'
                       />
                      <StandardInput 
                          control={form.control}
                          name='region'
                          label='Region'
                          placeholder='Enter region'
                       />
                    </div>    
                </>
                 )}
                   <StandardInput 
                     control={form.control}
                     name='email'
                     label='email'
                     placeholder='Enter email'
                   />
                   <StandardInput 
                     control={form.control}
                     name='password'
                     label='Password'
                     placeholder='Enter password'
                   />

                   <div className='flex flex-col gap-4'>
                     <Button
                        disabled={isLoading} 
                        className='form-btn hover:bg-orange-400'   type='submit' >
                        {isLoading ? (
                            <>
                             <Loader2 size={20} className='animate-spin' />&nbsp; 
                             <span className='animate-pulse'>Loading...</span>
                            </>
                        ) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                     </Button>
                   </div>
               </form>
               
         </Form>

           <footer className='flex items-center justify-center gap-2'>
              <p className='text-16'>
                {type === 'sign-in' ? "Don't have an account?" : "Already have an account"}
              </p>
              <Link className='form-link' href={type === 'sign-in' ? '/sign-up' : '/sign-in'}>
               {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
              </Link>
          </footer>     

          <Toaster position="top-center"
                reverseOrder={false}
          /> 
         </>
        )}
    </section>
  )
}

export default AuthForm