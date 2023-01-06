import React, { ReactNode, useRef, useState } from 'react'
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
  const openPanelRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      <div
        className={cx(
          'flex gap-2 cursor-pointer font-semibold text-sm py-[10px] text-primary-70 select-none',
          className
        )}
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <CaretDown className='pointer-events-none' size={16} />
        ) : (
          <CaretRight className='pointer-events-none' size={16} />
        )}
        {title}
      </div>
      <div
        ref={openPanelRef}
        style={{
          height:
            isOpen && openPanelRef.current
              ? openPanelRef.current.scrollHeight
              : '0px'
        }}
        className='transition-all ease-in-out overflow-hidden'>
        {children}
      </div>
    </div>
  )
}

export default Accordion
