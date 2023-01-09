import React from 'react'
import cx from 'classnames'
import { Info } from 'phosphor-react'
import { Option } from './types'

interface OptionItemProps<ValueType = string> {
  option: Option<ValueType>
  searchQuery: string
  onOptionClick: (option: Option<ValueType>) => void
  filteredAccordionOptionsLength?: number
  tooltipDescription?: string
  className?: string
}

const OptionItem = <ValueType extends unknown>({
  option,
  searchQuery,
  onOptionClick,
  filteredAccordionOptionsLength,
  tooltipDescription,
  className
}: OptionItemProps<ValueType>) => (
  <button
    type='button'
    onClick={() => onOptionClick(option)}
    className={cx(
      'block w-full font-semibold text-left pr-2 pl-8 py-[10px] text-sm leading-5 text-primary-50 hover:bg-primary-5 focus:outline-none focus:text-gray-900',
      {
        '!text-primary-70': searchQuery !== '',
        '!pl-4': filteredAccordionOptionsLength === 0
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

export default OptionItem
