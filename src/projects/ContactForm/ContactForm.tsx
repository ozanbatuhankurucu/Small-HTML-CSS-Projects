import React, { useState } from 'react'
import { Input } from '../../components/Input'
import { FormValues } from './types'

export const ContactForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: ''
  })
  const { name } = formValues

  return (
    <div className='font-muli'>
      <div className='pt-12 px-2'>
        <h1 className='text-[#111727] font-medium text-3xl'>
          Level up your brand
        </h1>
        <div className='mt-2 text-gray-600 font-normal'>
          You can reach us anytime via
        </div>
        <div className='text-[#53389F]'>hi@untitledui.com</div>
        <Input
          value={name}
          className='border'
          type='text'
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>
    </div>
  )
}
