import { CaretDown, ChatCircle, X } from 'phosphor-react'
import React, { FC, useState } from 'react'
import cx from 'classnames'
import styled from 'styled-components'

interface ContainerProps {
  isOpen: boolean
}

const Container = styled.div<ContainerProps>`
  box-shadow: ${({ isOpen }) =>
    isOpen
      ? '0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1)'
      : 'none'};
  transition: 0.3s ease;
`
interface CollapseItemProps {
  question: string
  answer: string
}

const CollapseItem: FC<CollapseItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container
      isOpen={isOpen}
      className={cx(
        'w-[600px] bg-transparent border border-[#9fa4a8] rounded-md p-5 relative overflow-hidden',
        {
          '!bg-white': isOpen
        }
      )}>
      <div className='flex justify-between'>
        <div className='font-medium'> {question}</div>
        {!isOpen && (
          <CaretDown
            className='cursor-pointer text-black'
            size={20}
            onClick={() => setIsOpen(true)}
          />
        )}
        {isOpen && (
          <div
            role='button'
            className='rounded-full w-5 h-5 bg-gray-500 flex items-center justify-center cursor-pointer'
            onClick={() => setIsOpen(false)}>
            <X className='text-white' size={14} />
          </div>
        )}
      </div>
      {isOpen && (
        <>
          <ChatCircle
            color='#2ecc71'
            className='opacity-20 absolute -left-4 top-1 rotate-[270deg]'
            size={90}
          />
          <ChatCircle
            color='#3498db'
            className='opacity-20 absolute top-8 left-2'
            size={90}
          />
        </>
      )}
      <div
        className={cx('mt-4 overflow-hidden', {
          hidden: !isOpen,
          block: isOpen
        })}>
        <p>{answer}</p>
      </div>
    </Container>
  )
}

export default CollapseItem
