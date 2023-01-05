import { CaretDown, CaretUp, FileSearch } from 'phosphor-react'
import { FaSearch } from 'react-icons/fa'
import { useState, useRef, useEffect } from 'react'
import cx from 'classnames'
import Accordion from './Accordion'
import OptionItem from './OptionItem'

export interface Option {
  value: string
  label: string
}

interface DropdownProps {
  options: any[]
  onChange: (selectedOption: Option) => void
  value: Option
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
  const dropdownRef = useRef<HTMLDivElement>(null)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)
  console.log('%c -----options----- ', 'background: #FF0000')
  console.log(options)
  console.log('%c -----options----- ', 'background: #FF0000')

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchQuery(value)
    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(value.toLowerCase())
      )
    )
  }

  const handleOptionClick = (option: Option) => {
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
          'flex items-center justify-between gap-2 text-primary-100 bg-primary-2 text-[15px] font-semibold py-2 pl-[14px] pr-4 appearance-none rounded-[1px] leading-5 min-w-[192px] h-9 border border-primary-15  focus:outline-none  hover:bg-primary-10',
          {
            'bg-primary-10 border-primary-50': isOpen
          }
        )}>
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
            <div className='flex items-center bg-primary-5 text-primary-100 p-2 rounded-[4px]'>
              <input
                value={searchQuery}
                onChange={handleSearchChange}
                className='block w-full bg-transparent leading-5 text-sm font-semibold transition duration-150 ease-in-out focus:outline-none placeholder:text-primary-100'
                placeholder={searchPlaceholder}
              />
              <FaSearch className='text-primary-70' size={20} />
            </div>
          </div>
          <hr className='bg-primary-100' />
          <div className='overflow-auto max-h-64 rounded-md shadow-xs py-2'>
            {filteredOptions.map((option, index) => {
              if (option.accordion) {
                return (
                  <Accordion className='px-2' title={option.accordionTitle}>
                    {option.options.map((option: any, index: number) => {
                      return (
                        <OptionItem
                          key={index}
                          option={option}
                          searchQuery={searchQuery}
                          onOptionClick={(option) => handleOptionClick(option)}
                        />
                      )
                    })}
                  </Accordion>
                )
              }
              return (
                <OptionItem
                  key={index}
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
