import React, { FC } from 'react'
import cx from 'classnames'

interface BoxProps {
  label?: React.ReactElement
  icon?: React.ReactElement | string
  isSelected?: boolean
  className?: string
  iconClassName?: string
  onClick?: () => void
}
export const Box: FC<BoxProps> = ({
  icon,
  label,
  isSelected,
  className,
  iconClassName,
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
      {label}
      {icon && (
        <div
          className={cx('flex justify-end font-normal text-xs', iconClassName)}>
          {icon}
        </div>
      )}
    </div>
  )
}
