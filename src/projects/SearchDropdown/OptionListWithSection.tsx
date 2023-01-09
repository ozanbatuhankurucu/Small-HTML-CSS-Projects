import React, { FC } from 'react'
import { Option } from './DropdownWithSearch'
import OptionItem from './OptionItem'

interface OptionListWithSectionProps {
  options: Option[]
  searchQuery: string
  handleOptionClick: (option: Option) => void
  sectionTitle: string
}
export const OptionListWithSection: FC<OptionListWithSectionProps> = ({
  handleOptionClick,
  options,
  searchQuery,
  sectionTitle
}) => (
  <>
    <div className='text-primary-30 pl-8 uppercase font-semibold text-xs select-none'>
      {sectionTitle}
    </div>
    {options.map((option) => (
      <OptionItem
        key={option.value}
        className='!pl-[42px]'
        option={option}
        searchQuery={searchQuery}
        onOptionClick={(opt) => handleOptionClick(opt)}
        tooltipDescription={option.tooltipDescription}
      />
    ))}
  </>
)
