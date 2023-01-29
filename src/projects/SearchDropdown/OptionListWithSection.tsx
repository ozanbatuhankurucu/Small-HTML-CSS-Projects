import React from 'react'

import OptionItem from './OptionItem'
import { Option } from './types'

interface OptionListWithSectionProps<ValueType = string> {
  options: Option<ValueType>[]
  searchQuery: string
  handleOptionClick: (option: Option<ValueType>) => void
  sectionTitle: string
}
function OptionListWithSection<ValueType>({
  handleOptionClick,
  options,
  searchQuery,
  sectionTitle
}: OptionListWithSectionProps<ValueType>) {
  return (
    <>
      <div className='text-primary-30 pl-8 uppercase font-semibold text-xs select-none'>
        {sectionTitle}
      </div>
      {options.map((option) => (
        <OptionItem<ValueType>
          key={option.key}
          isAccordionOption
          className='!pl-[42px]'
          option={option}
          searchQuery={searchQuery}
          onOptionClick={(opt) => handleOptionClick(opt)}
        />
      ))}
    </>
  )
}

export default OptionListWithSection
