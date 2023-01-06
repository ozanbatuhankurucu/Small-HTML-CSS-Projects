import React, { FC } from 'react'
import OptionItem from './OptionItem'

interface OptionListWithSectionProps {
  options: any[]
  searchQuery: string
  handleOptionClick: (option: any) => void
  sectionTitle: string
}
export const OptionListWithSection: FC<OptionListWithSectionProps> = ({
  handleOptionClick,
  options,
  searchQuery,
  sectionTitle
}) => {
  return (
    <>
      <div className='text-primary-30 pl-8 uppercase font-semibold text-xs select-none'>
        {sectionTitle}
      </div>
      {options.map((option: any) => (
        <OptionItem
          key={option.value}
          className='!pl-[42px]'
          option={option}
          searchQuery={searchQuery}
          onOptionClick={(option) => handleOptionClick(option)}
          tooltipDescription={option.tooltipDescription}
        />
      ))}
    </>
  )
}
