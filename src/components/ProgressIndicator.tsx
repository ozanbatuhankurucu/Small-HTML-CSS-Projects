import cx from 'classnames'
import { FC } from 'react'
import { getProgressIndicatorColor } from '../utils'

interface IndicatorProgressProps {
  value: number
  className?: string
}
const IndicatorProgress: FC<IndicatorProgressProps> = ({
  value,
  className
}) => (
  <div className={cx('bg-[#3D4046] h-[6px] rounded-full relative', className)}>
    <div
      className=' h-full rounded-full absolute left-0'
      style={{
        width: `${value}%`,
        backgroundColor: getProgressIndicatorColor(value)
      }}
    />
  </div>
)

export default IndicatorProgress
