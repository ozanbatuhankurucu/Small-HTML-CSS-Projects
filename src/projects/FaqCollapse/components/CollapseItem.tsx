import { CaretDown, X } from 'phosphor-react'
import React, { FC, useState } from 'react'
import cx from 'classnames'

interface CollapseItemProps {
  question: string
  answer: string
}

const CollapseItem: FC<CollapseItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cx('w-[600px] border border-primary-30 rounded-md p-5', {
        '!bg-white': isOpen
      })}>
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
      <div
        className={cx('mt-4 overflow-hidden', {
          hidden: !isOpen,
          block: isOpen
        })}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default CollapseItem
