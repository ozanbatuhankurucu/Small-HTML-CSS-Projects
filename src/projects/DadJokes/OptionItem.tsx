import React, { FC } from 'react'
import cx from 'classnames'
import { Info } from 'phosphor-react'
interface OptionItemProps {
  option: any
  searchQuery: string
  onOptionClick: (option: any) => void
  tooltipDescription?: string
  className?: string
}

const OptionItem: FC<OptionItemProps> = ({
  option,
  searchQuery,
  onOptionClick,
  tooltipDescription,
  className
}) => {
  const isOptionItemMatchedToSearchQuery =
    searchQuery &&
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  return (
    <button
      type='button'
      onClick={() => onOptionClick(option)}
      className={cx(
        'block w-full font-semibold text-left pr-2 pl-8 py-[10px] text-sm leading-5 text-primary-70 hover:bg-primary-5 focus:outline-none focus:bg-gray-100 focus:text-gray-900',
        {
          '!text-primary-70': searchQuery === '',
          'text-[#242836]': isOptionItemMatchedToSearchQuery,
          'text-primary-50': !isOptionItemMatchedToSearchQuery
        },
        className
      )}>
      <div className='flex gap-2'>
        <span>{option.label}</span>
        {tooltipDescription && (
          <div className='w-4 h-4'>
            <Info className='text-primary-70' size={16} />
          </div>
        )}
      </div>
    </button>
  )
}

export default OptionItem
