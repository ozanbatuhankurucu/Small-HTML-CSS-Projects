import React, { FC } from 'react'
import usePercentageData from './usePercentageData'

interface PercentageProps {
  percentage: number
  setPercentage: React.Dispatch<React.SetStateAction<number>>
}

const Percentage: FC<PercentageProps> = ({ percentage, setPercentage }) => {
  const { textOpacity } = usePercentageData(percentage, setPercentage)
  return (
    <div
      style={{
        opacity: textOpacity
      }}
      className='text-3xl text-white absolute'>
      {percentage}%
    </div>
  )
}

export default Percentage
