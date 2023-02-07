import React, { FC } from 'react'
import cx from 'classnames'

interface BoxProps {
  label?: string
  icon?: React.ReactElement | string
  isSelected?: boolean
  className?: string
  onClick?: () => void
}
export const Box: FC<BoxProps> = ({
  icon,
  label,
  isSelected,
  className,
  onClick
}) => {
  return (
    <div
      className={cx(
        'bg-[#272E3F] pt-3 pb-2 px-4 rounded-lg w-[200px]',
        className,
        {
          'border border-white': isSelected
        }
      )}
      onClick={onClick}>
      {label && (
        <span className='font-bold text-xs text-[#B1B5C1]'>{label}</span>
      )}
      {icon && (
        <div className='flex justify-end font-normal text-xs'>{icon}</div>
      )}
    </div>
  )
}
