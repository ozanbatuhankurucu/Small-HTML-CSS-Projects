import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import classNames from 'classnames'
import { FC } from 'react'
import useInputFocus from '../../hooks/useInputFocus'

const SearchInput = styled.input`
  background: none;
`
interface HiddenSearchWidgetProps {
  placeholder?: string
  iconColor?: string // example color hex code : #246142
}
const HiddenSearchWidget: FC<HiddenSearchWidgetProps> = ({
  placeholder,
  iconColor
}) => {
  const { inputRef, setShowInputWidget, showInputWidget } = useInputFocus(false)

  return (
    <div
      className={classNames('flex px-3 py-2 bg-white rounded', {
        'gap-2': showInputWidget
      })}>
      <SearchInput
        ref={inputRef}
        className={classNames('outline-none w-0 transition-all', {
          'w-36': showInputWidget
        })}
        type='text'
        placeholder={placeholder}
      />
      <div
        style={{
          color: iconColor
        }}
        className='flex items-center cursor-pointer '>
        <FaSearch
          size={18}
          onClick={() => setShowInputWidget((prev) => !prev)}
        />
      </div>
    </div>
  )
}

export default HiddenSearchWidget
