import { FC } from 'react'
import cx from 'classnames'

interface TagProps {
  choice: string
  isSelected: boolean
}

export const Tag: FC<TagProps> = ({ choice, isSelected }) => (
  <div
    className={cx(
      'bg-[#f0932b] text-white rounded-[50px] px-5 py-2 text-sm font-medium',
      {
        '!bg-[#273c75]': isSelected
      }
    )}>
    {choice}
  </div>
)
