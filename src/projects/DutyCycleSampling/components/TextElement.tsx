import React, { FC } from 'react'
import cx from 'classnames'

interface TextElementProps {
  text: string
  className?: string
  label?: string
}
export const TextElement: FC<TextElementProps> = ({
  text,
  label,
  className
}) => (
  <div className={cx('flex flex-col', className)}>
    {label && <label className='font-normal text-sm'>{label}</label>}
    <div className='flex items-center w-[200px] h-10 px-4 mt-3 bg-[#272E3F] rounded-lg text-[#B1B5C1] font-normal text-xs border border-[#272E3F] hover:border-white'>
      {text}
    </div>
  </div>
)
