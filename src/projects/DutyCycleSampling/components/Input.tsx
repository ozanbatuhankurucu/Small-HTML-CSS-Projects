import cx from 'classnames'
import React, { ChangeEvent } from 'react'

interface InputProps {
  type: 'text' | 'password' | 'email' | 'number' | 'search'
  value?: string
  onChange: (value: string) => void
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
      onChange(event.target.value)
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
            'mt-3 px-4 bg-[#272E3F] rounded-lg w-[200px] h-10 text-[#B1B5C1] !outline-none text-xs font-normal border border-[#272E3F] focus:border focus:border-white hover:border hover:border-white',
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
