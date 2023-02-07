import React, { FC } from 'react'
import { Box } from '../components/Box'
import { SHAPES } from '../constants'
import { Shape, Step, StepsDataType } from '../types'

interface FirstStepProps {
  firstStep: Step
  setSelectedStep: (selectedStep: number) => void
  setSteps: React.Dispatch<React.SetStateAction<StepsDataType>>
}
export const FirstStep: FC<FirstStepProps> = ({
  firstStep,
  setSelectedStep,
  setSteps
}) => {
  const handleBoxOnClick = (selectedShape: Shape) => {
    setSelectedStep(1)
    setSteps((prev) => ({
      ...prev,
      firstStep: {
        ...prev.firstStep,
        selectedValue: selectedShape
      }
    }))
  }

  return (
    <div className='!-mt-6'>
      <div className='font-normal text-sm'>What is the diamond’s shape?</div>
      <div className='grid grid-cols-2 gap-4 mt-4'>
        {SHAPES.map((shape) => (
          <Box
            className='!pb-5 cursor-pointer'
            key={shape}
            label={shape}
            isSelected={shape === firstStep.selectedValue}
            onClick={() => handleBoxOnClick(shape)}
          />
        ))}
      </div>
    </div>
  )
}
