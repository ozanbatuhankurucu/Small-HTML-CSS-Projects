import React, { FC } from 'react'
import cx from 'classnames'

interface SocialLoginBtnProps {
  icon: React.ReactNode
  iconText: string
  className?: string
}
const SocialLoginBtn: FC<SocialLoginBtnProps> = ({
  icon,
  iconText,
  className
}) => (
  <div
    className={cx(
      'flex gap-2 items-center border rounded py-2 px-3 cursor-pointer',
      className
    )}>
    {icon}
    <span className='text-sm font-bold'> {iconText}</span>
  </div>
)
export default SocialLoginBtn
