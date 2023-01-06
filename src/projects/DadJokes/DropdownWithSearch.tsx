import { CaretDown, CaretUp } from 'phosphor-react'
import React, { useState, useRef, useEffect } from 'react'
import cx from 'classnames'
import Accordion from './Accordion'
import OptionItem from './OptionItem'
import { ReactComponent as YourSvg } from '../../assets/svg/MagnifyingGlass.svg'
import { OptionListWithSection } from './OptionListWithSection'
import * as _ from 'lodash'
import { isLabelIncludesSearchQuery } from './utils'

interface DropdownProps {
  options: any[]
  onChange: (selectedOption: any) => void
  value: any
  searchPlaceholder?: string
}

const DropdownWithSearch: React.FC<DropdownProps> = ({
  options,
  onChange,
  value,
  searchPlaceholder = 'Search...'
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filteredOptions, setFilteredOptions] = useState(options)
  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)

  const toggleDropdown = () => {
    if (!isOpen) {
      setSearchQuery('')
    }
    setIsOpen(!isOpen)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchQuery(value)

    // Filter values process start
    const optionsWithAccordion = options
      .filter((option) => option.accordion)
      .map((option) => ({
        ...option,
        options: option.options.filter((option: any) =>
          isLabelIncludesSearchQuery(option.label, value)
        )
      }))
      .filter((option) => option.options.length > 0)

    const optionsWithoutAccordion = options.filter(
      (option) =>
        !option.accordion && isLabelIncludesSearchQuery(option.label, value)
    )

    const filteredOptions = [
      ...optionsWithAccordion,
      ...optionsWithoutAccordion
    ]

    setFilteredOptions(filteredOptions)
    // Filter values process end
  }

  const handleOptionClick = (option: any) => {
    setIsOpen(false)
    setSearchQuery('')
    setFilteredOptions(options)
    onChange(option)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current || !toggleButtonRef.current) return

      if (
        !dropdownRef.current.contains(event.target as Node) &&
        event.target !== toggleButtonRef.current
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [dropdownRef, toggleButtonRef])

  return (
    <div className='relative inline-block text-left'>
      <button
        ref={toggleButtonRef}
        type='button'
        onClick={toggleDropdown}
        className={cx(
          'flex items-center justify-between gap-2 text-primary-100 bg-primary-2 text-sm font-semibold py-2 pl-[14px] pr-4 appearance-none rounded-[1px] leading-5 min-w-[192px] h-9 border border-primary-15  focus:outline-none  hover:bg-primary-10',
          {
            'bg-primary-10 border-primary-50': isOpen
          }
        )}>
        {value.sectionTitle && (
          <span className='pointer-events-none'>{value.sectionTitle}: </span>
        )}
        {value.label}
        {isOpen ? (
          <CaretUp className='pointer-events-none' size={12} />
        ) : (
          <CaretDown className='pointer-events-none' size={12} />
        )}
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className='origin-top-left absolute left-0 mt-3 min-w-[300px] border border-primary-10 backdrop-blur rounded-[4px] shadow-sm'>
          <div className='p-2'>
            <div
              className={cx(
                'flex items-center border bg-primary-5 text-primary-100 p-2 rounded-[4px] hover:bg-primary-10 hover:border-primary-50',
                {
                  '!bg-primary-10 !border-primary-50': isSearchInputFocused
                }
              )}>
              <input
                value={searchQuery}
                onChange={handleSearchChange}
                className='block w-full bg-transparent pr-2 leading-5 text-sm font-semibold transition duration-150 ease-in-out focus:outline-none placeholder:text-primary-100'
                placeholder={searchPlaceholder}
                onFocus={() => {
                  setIsSearchInputFocused(true)
                }}
                onBlur={() => {
                  setIsSearchInputFocused(false)
                }}
              />
              <YourSvg />
            </div>
          </div>
          <hr className='bg-primary-100' />
          <div className='overflow-auto max-h-64 rounded-md shadow-xs py-2'>
            {filteredOptions.map((option) => {
              if (option.accordion) {
                const filterSectionTitledOptions = option.options.filter(
                  (option: any) => option.sectionTitle
                )
                const filterNonSectionTitledOptions = option.options.filter(
                  (option: any) => !option.sectionTitle
                )
                const groupedBySectionTitle = _.groupBy(
                  filterSectionTitledOptions,
                  'sectionTitle'
                )

                return (
                  <Accordion
                    key={option.key}
                    className='px-2'
                    title={option.accordionTitle}>
                    <>
                      {_.map(groupedBySectionTitle, (options, key) => (
                        <OptionListWithSection
                          key={key}
                          handleOptionClick={handleOptionClick}
                          sectionTitle={key}
                          options={options}
                          searchQuery={searchQuery}
                        />
                      ))}
                      {filterNonSectionTitledOptions.map((option: any) => (
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
                  </Accordion>
                )
              }
              return (
                <OptionItem
                  key={option.key}
                  option={option}
                  searchQuery={searchQuery}
                  onOptionClick={(option) => handleOptionClick(option)}
                />
              )
            })}
            {filteredOptions.length === 0 && (
              <div className='text-center text-primary-100 text-sm font-semibold py-2'>
                No results found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownWithSearch
