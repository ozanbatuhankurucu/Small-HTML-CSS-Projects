import React, { FC, useEffect } from 'react'

interface SixthStepProps {
  setSelectedStep: (step: number) => void
}
export const SixthStep: FC<SixthStepProps> = ({ setSelectedStep }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSelectedStep(6)
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div>
      <span className='text-xs font-normal text-[#B1B5C1]'>
        Thank you for teaching the AI. It has now learned how to grade diamonds
        like this in the future....
      </span>
    </div>
  )
}
