import React, { FC, ReactNode } from 'react'
import Wrapper from '../StyledComponents/Wrapper'

interface EventBoxProps {
  children: ReactNode
  title: ReactNode
}
const EventBox: FC<EventBoxProps> = ({ children, title }) => (
  <div className='flex flex-col gap-2 items-center'>
    {title}
    <Wrapper className='p-5 border border-[#999] bg-[#eee] w-[120px] flex justify-center  font-bold text-xl'>
      {children}
    </Wrapper>
  </div>
)

export default EventBox
