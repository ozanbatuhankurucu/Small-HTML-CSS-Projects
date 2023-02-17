import { CheckCircle, FileDotted } from 'phosphor-react'
import React, { FC } from 'react'
import cx from 'classnames'

interface FileElementProps {
  text: string
  className?: string
  label?: string
}
export const FileElement: FC<FileElementProps> = ({
  text,
  label,
  className
}) => (
  <div className={cx('flex flex-col', className)}>
    {label && <label className='font-normal text-sm'>{label}</label>}
    <div className='flex items-center h-10 bg-[#272E3F] rounded-[6px] mt-3 border border-[#272E3F] hover:border-white'>
      <div className='flex items-end gap-2 px-3'>
        <FileDotted size={20} />
        <span className='w-[245px] text-ellipsis whitespace-nowrap overflow-hidden text-xs font-normal'>
          {text}
        </span>
        <span className='text-[#6CFFA7] text-xs font-normal'>
          Upload complete
        </span>
        <CheckCircle size={20} color='#6CFFA7' />
      </div>
    </div>
  </div>
)
