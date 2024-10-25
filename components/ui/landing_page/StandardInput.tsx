"use client"
import { authFormSchema } from '@/lib/utils'
import React from 'react'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { FormControl, FormField, FormLabel, FormMessage } from '../form'
import { Input } from '../input'

const formSchema = authFormSchema('sign-up')

interface standardInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    placeholder: string,
    label: string,
}

const StandardInput = ({ control, name, placeholder, label}: standardInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
         <FormLabel>{label}</FormLabel>
            <div className='flex flex-col w-full'>
                <FormControl>
                    <Input 
                        placeholder={placeholder} 
                        {...field}
                        type={name === 'password' ? 'password' : 'text'}
                        className='text-gray-500 input-class'   
                    />
                </FormControl>
              <FormMessage className='form-message mt-1' />
            </div>
        </div>
    )}
    />
  )
}

export default StandardInput