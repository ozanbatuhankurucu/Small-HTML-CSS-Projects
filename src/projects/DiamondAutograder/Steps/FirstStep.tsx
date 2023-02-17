import React, { FC } from 'react'
import { Box } from '../components/Box'
import { SHAPES } from '../constants'
import { FirstStepType, Shape, StepsDataType } from '../types'

interface FirstStepProps {
  firstStep: FirstStepType
  setSelectedStep: (selectedStep: number) => void
  setSteps: React.Dispatch<React.SetStateAction<StepsDataType>>
}
export const FirstStep: FC<FirstStepProps> = ({
  firstStep,
  setSelectedStep,
  setSteps
}) => {
  const handleShapeBoxOnClick = (selectedShape: Shape) => {
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
    <div>
      <div className='font-normal text-sm'>What is the diamond’s shape?</div>
      <div className='grid grid-cols-2 gap-4 mt-4'>
        {SHAPES.map((shape) => (
          <Box
            className='!pb-5 cursor-pointer border border-[#272E3F] hover:border-white'
            key={shape}
            label={
              <span className='font-bold text-xs text-[#B1B5C1]'>{shape}</span>
            }
            isSelected={shape === firstStep.selectedValue}
            onClick={() => handleShapeBoxOnClick(shape)}
          />
        ))}
      </div>
      <button
        type='button'
        className='bg-[#272E3F]  border border-[#272E3F] hover:border-white py-2 px-9 text-[#E4E4E8] rounded-[20px] mt-[62px]'
        onClick={() => setSelectedStep(1)}>
        Next
      </button>
    </div>
  )
}
