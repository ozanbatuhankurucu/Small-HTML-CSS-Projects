import React, { FC } from 'react'
import { stepsData } from '../constants'
import { AIGuessDataType, StepsDataType } from '../types'

interface LastStepProps {
  setSelectedStep: (selectedStep: number) => void
  setSteps: React.Dispatch<React.SetStateAction<StepsDataType>>
  setAIGuessData: React.Dispatch<
    React.SetStateAction<AIGuessDataType | undefined>
  >
}
export const LastStep: FC<LastStepProps> = ({
  setAIGuessData,
  setSelectedStep,
  setSteps
}) => {
  const handleGradeAnotherButtonOnClick = () => {
    setSelectedStep(0)
    setSteps(stepsData)
    setAIGuessData(undefined)
  }

  return (
    <div className='flex flex-col items-center gap-8'>
      <span className='font-normal text-xs text-[#B1B5C1]'>
        Grading complete...
      </span>
      <button
        type='button'
        className='bg-[#272E3F] rounded-lg text-lg font-normal w-[250px] h-[58px] flex justify-center items-center text-[#E4E4E8] border border-[#272E3F] hover:border-white'
        onClick={handleGradeAnotherButtonOnClick}>
        Grade another
      </button>
    </div>
  )
}
