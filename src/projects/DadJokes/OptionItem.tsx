import React, { FC } from 'react'
import cx from 'classnames'
interface OptionItemProps {
  option: any
  searchQuery: string
  onOptionClick: (option: any) => void
}

const OptionItem: FC<OptionItemProps> = ({
  option,
  searchQuery,
  onOptionClick
}) => {
  const isOptionItemMatchedToSearchQuery =
    searchQuery &&
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  return (
    <button
      type='button'
      onClick={() => onOptionClick(option)}
      className={cx(
        'block w-full font-semibold text-left px-4 py-2 text-sm leading-5 text-primary-70 hover:bg-primary-5 focus:outline-none focus:bg-gray-100 focus:text-gray-900',
        {
          '!text-primary-70': searchQuery === '',
          'text-[#242836]': isOptionItemMatchedToSearchQuery,
          'text-primary-50': !isOptionItemMatchedToSearchQuery
        }
      )}>
      {option.label}
    </button>
  )
}

export default OptionItem
