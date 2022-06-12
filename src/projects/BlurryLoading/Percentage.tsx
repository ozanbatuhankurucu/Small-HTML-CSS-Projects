import React, { useEffect, useRef } from 'react'
import scale from './utils'

interface PercentageProps {
  percentage: number
  setPercentage: React.Dispatch<React.SetStateAction<number>>
}

function Percentage({ percentage, setPercentage }: PercentageProps) {
  const interval = useRef<number>()
  const textOpacity = scale(percentage, 0, 100, 1, 0)

  useEffect(() => {
    interval.current = window.setInterval(() => {
      setPercentage((prev: number) => prev + 1)
    }, 50)

    return () => {
      window.clearInterval(interval.current)
    }
  }, [])

  useEffect(() => {
    if (percentage > 99) {
      window.clearInterval(interval.current)
    }
  }, [percentage])

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
