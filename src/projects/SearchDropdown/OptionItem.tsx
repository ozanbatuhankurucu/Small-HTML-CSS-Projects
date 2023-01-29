import cx from 'classnames'
import React from 'react'

import { Option } from './types'

interface OptionItemProps<ValueType = string> {
  option: Option<ValueType>
  searchQuery: string
  onOptionClick: (option: Option<ValueType>) => void
  isAccordionOption: boolean
  filteredAccordionOptionsLength?: number
  className?: string
}

function OptionItem<ValueType>({
  option,
  searchQuery,
  onOptionClick,
  isAccordionOption,
  filteredAccordionOptionsLength,
  className
}: OptionItemProps<ValueType>) {
  return (
    <button
      type='button'
      onClick={() => onOptionClick(option)}
      className={cx(
        'block w-full font-semibold text-left pr-2 pl-8 py-[10px] text-sm leading-5 text-primary-60 hover:bg-primary-5 focus:outline-none focus:text-gray-900',
        {
          '!text-primary-80': isAccordionOption && searchQuery !== '',
          '!text-primary-100': !isAccordionOption && searchQuery !== '',
          '!pl-4': filteredAccordionOptionsLength === 0
        },
        className
      )}>
      <div>{option.labelElement || option.label}</div>
    </button>
  )
}
export default OptionItem
