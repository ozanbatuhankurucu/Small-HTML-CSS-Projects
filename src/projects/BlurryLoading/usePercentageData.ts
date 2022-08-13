import { useEffect, useRef, Dispatch, SetStateAction } from 'react'
import scale from './utils'

const usePercentageData = (
  percentage: number,
  setPercentage: Dispatch<SetStateAction<number>>
) => {
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

  return { textOpacity }
}

export default usePercentageData
