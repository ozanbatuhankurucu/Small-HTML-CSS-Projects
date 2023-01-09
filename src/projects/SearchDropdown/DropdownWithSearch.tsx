import { CaretDown, CaretUp } from 'phosphor-react'
import React, { useState, useRef, useEffect } from 'react'
import cx from 'classnames'
import * as _ from 'lodash'
import Accordion from './Accordion'
import OptionItem from './OptionItem'
import { ReactComponent as SearchSvg } from '../../assets/svg/MagnifyingGlass.svg'
import { OptionListWithSection } from './OptionListWithSection'
import { isLabelIncludesSearchQuery } from './utils'

export interface Option {
  label: string
  value: string
  tooltipDescription?: string
  sectionTitle?: string
}
export interface AccordionOption {
  key: string
  accordionTitle: string
  options: Option[]
}
interface DropdownWithSearchProps {
  accordionOptions?: AccordionOption[]
  nonAccordionOptions?: Option[]
  onChange: (_selectedOption: Option) => void
  value: Option
  searchPlaceholder?: string
}

const DropdownWithSearch: React.FC<DropdownWithSearchProps> = ({
  accordionOptions = [],
  nonAccordionOptions = [],
  onChange,
  value,
  searchPlaceholder = 'Search...'
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filteredAccordionOptions, setFilteredAccordionOptions] =
    useState<AccordionOption[]>(accordionOptions)
  const [filteredNonAccordionOptions, setFilteredNonAccordionOptions] =
    useState<Option[]>(nonAccordionOptions)
  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)

  const resetFilteredOptions = () => {
    setFilteredAccordionOptions(accordionOptions)
    setFilteredNonAccordionOptions(nonAccordionOptions)
  }

  const toggleDropdown = () => {
    if (!isOpen) {
      setSearchQuery('')
      resetFilteredOptions()
    }
    setIsOpen((prev) => !prev)
  }

  const filterOptions = (targetValue: string) => {
    const filteredAccordionOpts = accordionOptions
      .map((option) => ({
        ...option,
        options: option.options.filter((opt) =>
          isLabelIncludesSearchQuery(opt.label, targetValue)
        )
      }))
      .filter((option) => option.options.length > 0)

    const filteredNonAccordionOpts = nonAccordionOptions.filter((option) =>
      isLabelIncludesSearchQuery(option.label, targetValue)
    )

    setFilteredAccordionOptions(filteredAccordionOpts)
    setFilteredNonAccordionOptions(filteredNonAccordionOpts)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: targetValue } = event.target
    setSearchQuery(targetValue)
    filterOptions(targetValue)
  }

  const handleOptionClick = (selectedOption: Option) => {
    setIsOpen(false)
    setSearchQuery('')
    resetFilteredOptions()
    onChange(selectedOption)
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
              <SearchSvg />
            </div>
          </div>
          <hr className='bg-primary-100' />
          <div className='overflow-auto max-h-64 rounded-md shadow-xs py-2'>
            {filteredAccordionOptions.map((option) => {
              const filterSectionTitledOptions = option.options.filter(
                (opt) => opt.sectionTitle
              )
              const filterNonSectionTitledOptions = option.options.filter(
                (opt) => !opt.sectionTitle
              )
              const groupedBySectionTitle = _.groupBy(
                filterSectionTitledOptions,
                'sectionTitle'
              )

              return (
                <Accordion
                  key={option.key}
                  searchQuery={searchQuery}
                  className='px-2'
                  title={option.accordionTitle}>
                  <>
                    {_.map(groupedBySectionTitle, (groupedOptions, key) => (
                      <OptionListWithSection
                        key={key}
                        handleOptionClick={handleOptionClick}
                        sectionTitle={key}
                        options={groupedOptions}
                        searchQuery={searchQuery}
                      />
                    ))}
                    {filterNonSectionTitledOptions.map(
                      (nonSectionTitledOption) => (
                        <OptionItem
                          key={nonSectionTitledOption.value}
                          className='!pl-[42px]'
                          option={nonSectionTitledOption}
                          searchQuery={searchQuery}
                          onOptionClick={(opt) => handleOptionClick(opt)}
                          tooltipDescription={
                            nonSectionTitledOption.tooltipDescription
                          }
                        />
                      )
                    )}
                  </>
                </Accordion>
              )
            })}
            {filteredNonAccordionOptions.map((option) => (
              <OptionItem
                key={option.value}
                option={option}
                searchQuery={searchQuery}
                onOptionClick={(opt) => handleOptionClick(opt)}
                tooltipDescription={option.tooltipDescription}
                filteredAccordionOptionsLength={filteredAccordionOptions.length}
              />
            ))}
            {filteredAccordionOptions.length === 0 &&
              filteredNonAccordionOptions.length === 0 && (
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
