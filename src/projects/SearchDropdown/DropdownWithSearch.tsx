import cx from 'classnames'
import * as _ from 'lodash'
import { CaretDown, CaretUp } from 'phosphor-react'
import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as SearchSvg } from '../../assets/svg/MagnifyingGlass.svg'

import MagnifyingGlass from '@/assets/icons/MagnifyingGlass.svg'

// import { LoadingShimmer } from '../LoadingShimmer'
import Accordion from './Accordion'
import OptionItem from './OptionItem'
import OptionListWithSection from './OptionListWithSection'
import { AccordionOption, Option } from './types'
import { isLabelIncludesSearchQuery } from './utils'

interface DropdownWithSearchProps<ValueType = string> {
  accordionOptions?: AccordionOption<ValueType>[]
  nonAccordionOptions?: Option<ValueType>[]
  searchPlaceholder?: string
  menuContainerClass?: string
  className?: string
  loading?: boolean
  onChange: (_selectedOption: Option<ValueType>) => void
  value: Option<ValueType> | undefined
}

function DropdownWithSearch<ValueType>({
  accordionOptions = [],
  nonAccordionOptions = [],
  menuContainerClass,
  className,
  loading,
  searchPlaceholder = 'Search...',
  onChange,
  value
}: DropdownWithSearchProps<ValueType>) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filteredAccordionOptions, setFilteredAccordionOptions] =
    useState<AccordionOption<ValueType>[]>(accordionOptions)
  const [filteredNonAccordionOptions, setFilteredNonAccordionOptions] =
    useState<Option<ValueType>[]>(nonAccordionOptions)
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

    const filteredNonAccordionOpts = nonAccordionOptions.filter((opt) =>
      isLabelIncludesSearchQuery(opt.label, targetValue)
    )

    setFilteredAccordionOptions(filteredAccordionOpts)
    setFilteredNonAccordionOptions(filteredNonAccordionOpts)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: targetValue } = event.target
    setSearchQuery(targetValue)
    filterOptions(targetValue)
  }

  const handleOptionClick = (selectedOption: Option<ValueType>) => {
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
    <div className={cx('relative inline-block text-left', className)}>
      <button
        ref={toggleButtonRef}
        type='button'
        onClick={toggleDropdown}
        className={cx(
          'text-primary-90 bg-primary-2 text-sm font-semibold py-2 pl-[14px] pr-4 rounded-[1px] leading-5 min-w-[192px] border border-primary-15 whitespace-nowrap focus:outline-none  hover:bg-primary-10',
          {
            '!bg-primary-10 !border-primary-50': isOpen,
            '!hidden': loading
          }
        )}>
        <div className='flex items-center justify-between w-full gap-2 pointer-events-none'>
          <div>
            {value && (
              <>
                {value.labelElement && value.sectionTitle && (
                  <div className='flex items-center gap-2'>
                    <span>{value.sectionTitle}:</span>
                    {value.labelElement}
                  </div>
                )}
                {value.labelElement && !value.sectionTitle && (
                  <> {value.labelElement} </>
                )}
                {!value.labelElement && value.sectionTitle && (
                  <span>
                    {value.sectionTitle}: {value.label}
                  </span>
                )}
                {!value.labelElement && !value.sectionTitle && (
                  <span>{value.label}</span>
                )}
              </>
            )}
          </div>
          <div className='w-3 h-3'>
            {isOpen ? <CaretUp size={12} /> : <CaretDown size={12} />}
          </div>
        </div>
      </button>
      {/* {loading && <LoadingShimmer className='h-10 w-36' />} */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className={cx(
            'origin-top-left absolute left-0 mt-3 min-w-[300px] border border-primary-10 backdrop-blur-[10px] rounded-[4px] shadow-sm z-10 bg-contrast-100',
            menuContainerClass
          )}>
          <div className='p-2'>
            <div
              className={cx(
                'flex items-center border bg-primary-5 text-primary-100 p-2 rounded-[4px] hover:bg-primary-10  hover:border-primary-50',
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
                      <OptionListWithSection<ValueType>
                        key={key}
                        handleOptionClick={handleOptionClick}
                        sectionTitle={key}
                        options={groupedOptions}
                        searchQuery={searchQuery}
                      />
                    ))}
                    {filterNonSectionTitledOptions.map(
                      (nonSectionTitledOption) => (
                        <OptionItem<ValueType>
                          key={nonSectionTitledOption.key}
                          isAccordionOption
                          className='!pl-[42px]'
                          option={nonSectionTitledOption}
                          searchQuery={searchQuery}
                          onOptionClick={(opt) => handleOptionClick(opt)}
                        />
                      )
                    )}
                  </>
                </Accordion>
              )
            })}
            {filteredNonAccordionOptions.map((option) => (
              <OptionItem<ValueType>
                key={option.key}
                className='!text-primary-80 !font-bold'
                isAccordionOption={false}
                option={option}
                searchQuery={searchQuery}
                onOptionClick={(opt) => handleOptionClick(opt)}
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
