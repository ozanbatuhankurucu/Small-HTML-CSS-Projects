import React from 'react'
import OptionItem from './OptionItem'
import { Option } from './types'

interface OptionListWithSectionProps<ValueType = string> {
  options: Option<ValueType>[]
  searchQuery: string
  handleOptionClick: (option: Option<ValueType>) => void
  sectionTitle: string
}
export const OptionListWithSection = <ValueType extends unknown>({
  handleOptionClick,
  options,
  searchQuery,
  sectionTitle
}: OptionListWithSectionProps<ValueType>) => (
  <>
    <div className='text-primary-30 pl-8 uppercase font-semibold text-xs select-none'>
      {sectionTitle}
    </div>
    {options.map((option) => (
      <OptionItem<ValueType>
        key={option.key}
        className='!pl-[42px]'
        option={option}
        searchQuery={searchQuery}
        onOptionClick={(opt) => handleOptionClick(opt)}
        tooltipDescription={option.tooltipDescription}
      />
    ))}
  </>
)
