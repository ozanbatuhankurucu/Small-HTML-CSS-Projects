import React, { ReactNode, useState } from 'react'
import { CaretRight, CaretDown } from 'phosphor-react'
import cx from 'classnames'
type AccordionProps = {
  children: ReactNode
  title: string
  className?: string
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div
        className={cx(
          'flex gap-2 cursor-pointer font-semibold text-sm text-primary-70',
          className
        )}
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <CaretDown className='pointer-events-none' />
        ) : (
          <CaretRight className='pointer-events-none' />
        )}
        {title}
      </div>
      <div className={cx('overflow-hidden')}>{children}</div>
    </div>
  )
}

export default Accordion
