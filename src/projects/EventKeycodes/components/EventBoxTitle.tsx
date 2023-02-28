import React, { FC, ReactNode } from 'react'

interface EventBoxTitleProps {
  children: ReactNode
}
const EventBoxTitle: FC<EventBoxTitleProps> = ({ children }) => (
  <span className='text-sm text-[#555]'>{children}</span>
)

export default EventBoxTitle
