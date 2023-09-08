import { List, X } from 'phosphor-react'
import { useState } from 'react'
import styled from 'styled-components'
import cx from 'classnames'

interface StyledLiProps {
  open: boolean
}

const StyledLi = styled.li<StyledLiProps>`
  transform: rotateY(${(props) => (props.open ? '0deg' : '360deg')});
  opacity: ${(props) => (props.open ? 100 : 0)};
`

export const Navbar = () => {
  const [open, setOpen] = useState(true)

  return (
    <nav className='flex items-center bg-white  shadow-md rounded-sm p-4'>
      <ul
        className={cx(
          'w-[260px] flex gap-4 items-center text-[#000] transition-all duration-700 ease-in',
          {
            '!w-0': !open
          }
        )}>
        <StyledLi
          open={open}
          className='font-medium opacity-100 transition-all duration-700'>
          <a href='#'>Home</a>
        </StyledLi>
        <StyledLi
          open={open}
          className='font-medium opacity-100 transition-all duration-700'>
          <a href='#'>Works</a>
        </StyledLi>
        <StyledLi
          open={open}
          className='font-medium opacity-100 transition-all duration-700'>
          <a href='#'>About</a>
        </StyledLi>
        <StyledLi
          open={open}
          className='font-medium opacity-100 transition-all duration-700'>
          <a href='#'>Contact</a>
        </StyledLi>
      </ul>
      <button type='button'>
        <X
          className={cx(
            'text-[#5290f9] relative transition-all duration-700 rotate-180 opacity-100',
            {
              '!opacity-0 !hidden': !open
            }
          )}
          size={20}
          onClick={() => setOpen((prev) => !prev)}
        />
      </button>
      <button type='button'>
        <List
          className={cx(
            'text-[#5290f9] hidden relative transition-all duration-700 rotate-180 opacity-0',
            {
              '!opacity-100 !block': !open
            }
          )}
          size={20}
          onClick={() => setOpen((prev) => !prev)}
        />
      </button>
    </nav>
  )
}
