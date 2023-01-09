import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { CaretRight, CaretDown } from 'phosphor-react'
import cx from 'classnames'

type AccordionProps = {
  children: ReactNode
  title: string
  searchQuery: string
  className?: string
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  searchQuery,
  children,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (searchQuery !== '') {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [searchQuery])

  return (
    <div>
      <div
        role='button'
        className={cx(
          'flex gap-2 cursor-pointer font-semibold text-sm py-[10px] text-primary-70 select-none',
          className
        )}
        onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? (
          <CaretDown className='pointer-events-none' size={16} />
        ) : (
          <CaretRight className='pointer-events-none' size={16} />
        )}
        {title}
      </div>
      <div
        className={cx('block overflow-hidden', {
          '!hidden': !isOpen
        })}>
        {children}
      </div>
    </div>
  )
}

export default Accordion
