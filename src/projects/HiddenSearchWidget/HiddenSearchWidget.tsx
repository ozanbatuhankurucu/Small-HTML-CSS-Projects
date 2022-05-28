import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import classNames from 'classnames'
import { useState } from 'react'

const SearchInput = styled.input`
  background: none;
`
interface HiddenSearchWidgetProps {
  placeholder?: string
  iconColor?: string
}
function HiddenSearchWidget({
  placeholder,
  iconColor
}: HiddenSearchWidgetProps) {
  const [showSearchWidget, setShowSearchWidget] = useState<boolean>(false)
  return (
    <div
      className={classNames('flex px-3 py-2 bg-white rounded', {
        'gap-2': showSearchWidget
      })}>
      <SearchInput
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
