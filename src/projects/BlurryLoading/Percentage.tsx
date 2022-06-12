import React, { useEffect, useRef } from 'react'

interface PercentageProps {
  percentage: number
  setPercentage: React.Dispatch<React.SetStateAction<number>>
}

function Percentage({ percentage, setPercentage }: PercentageProps) {
  const interval = useRef<number>()
  useEffect(() => {
    interval.current = window.setInterval(() => {
      setPercentage((prev: number) => prev + 1)
    }, 50)

    return () => {
      window.clearInterval(interval.current)
    }
  }, [])

  useEffect(() => {
    if (percentage > 100) {
      window.clearInterval(interval.current)
    }
  }, [percentage])

  return <div className='text-3xl text-white absolute'>{percentage}%</div>
}

export default Percentage
