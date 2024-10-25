import AuthForm from '@/components/ui/landing_page/AuthForm'
import React from 'react'

const SignUp = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type='sign-up' />
    </section>
  )
}

export default SignUp
