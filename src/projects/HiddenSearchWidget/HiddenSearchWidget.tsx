import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import classNames from 'classnames'
import { useState, useEffect, useRef } from 'react'

const SearchInput = styled.input`
  background: none;
`
interface HiddenSearchWidgetProps {
  placeholder?: string
  iconColor?: string // example color hex code : #246142
}
function HiddenSearchWidget({
  placeholder,
  iconColor
}: HiddenSearchWidgetProps) {
  const [showSearchWidget, setShowSearchWidget] = useState<boolean>(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (searchInputRef.current && showSearchWidget)
      searchInputRef.current.focus()
  }, [showSearchWidget])

  return (
    <div
      className={classNames('flex px-3 py-2 bg-white rounded', {
        'gap-2': showSearchWidget
      })}>
      <SearchInput
        ref={searchInputRef}
        className={classNames('outline-none w-0 transition-all', {
          'w-36': showSearchWidget
        })}
        type='text'
        placeholder={placeholder}
      />
      <div
        style={{ color: iconColor }}
        className='flex items-center cursor-pointer '>
        <FaSearch
          size={18}
          onClick={() => setShowSearchWidget((prev) => !prev)}
        />
      </div>
    </div>
  )
}

export default HiddenSearchWidget
