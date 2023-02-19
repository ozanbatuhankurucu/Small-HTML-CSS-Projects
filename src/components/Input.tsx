import cx from 'classnames'
import React, { ChangeEvent } from 'react'

interface InputProps {
  type: 'text' | 'password' | 'email' | 'number' | 'search'
  value?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  className?: string
  label?: string
  placeholder?: string
  name?: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, type, placeholder, value = '', className, onChange, name, error },
    ref
  ) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event)
    }

    return (
      <div className='flex flex-col'>
        {label && (
          <label className='font-normal text-sm'>
            {label}
            {error && <span className='text-[#DF2960]'> *</span>}
          </label>
        )}
        <input
          className={cx(
            'mt-3 px-4 rounded-lg h-10 !outline-none text-xs font-normal',
            className
          )}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          ref={ref}
          name={name}
        />
        {error && (
          <div className='mt-1 text-[#DF2960] font-normal text-xs'>{error}</div>
        )}
      </div>
    )
  }
)
