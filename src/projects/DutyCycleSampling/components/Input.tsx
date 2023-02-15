import React, { ChangeEvent, FC } from 'react'
import cx from 'classnames'

interface InputProps {
  type: 'text' | 'password' | 'email' | 'number' | 'search'
  value: string
  onChange: (value: string) => void
  className?: string
  label?: string
  placeholder?: string
}

export const Input: FC<InputProps> = ({
  label,
  type,
  placeholder,
  value,
  className,
  onChange
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className='flex flex-col'>
      {label && <label className='font-normal text-sm'>{label}</label>}
      <input
        className={cx(
          'mt-3 px-4 bg-[#272E3F] rounded-lg w-[200px] h-10 text-[#B1B5C1] outline-none text-xs font-normal border border-[#272E3F] focus:border focus:border-white hover:border hover:border-white',
          className
        )}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  )
}
