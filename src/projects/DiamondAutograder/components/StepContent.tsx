import React, { FC, useState } from 'react'
import { FifthStep } from '../Steps/FifthStep'
import { FirstStep } from '../Steps/FirstStep'
import { FourthStep } from '../Steps/FourthStep'
import { SecondStep } from '../Steps/SecondStep'
import { SeventhStep } from '../Steps/SeventhStep'
import { SixthStep } from '../Steps/SixthStep'
import { ThirdStep } from '../Steps/ThirdStep'
import { AIGuessDataType, StepsDataType } from '../types'

interface StepContentProps {
  selectedStep: number
  setSelectedStep: (step: number) => void
  steps: StepsDataType
  setSteps: React.Dispatch<React.SetStateAction<StepsDataType>>
  aiGuessData: AIGuessDataType | undefined
  setAIGuessData: React.Dispatch<
    React.SetStateAction<AIGuessDataType | undefined>
  >
}
export const StepContent: FC<StepContentProps> = ({
  selectedStep,
  setSelectedStep,
  steps,
  setSteps,
  aiGuessData,
  setAIGuessData
}) => {
  if (selectedStep === 0) {
    return (
      <FirstStep
        setSelectedStep={setSelectedStep}
        firstStep={steps.firstStep}
        setSteps={setSteps}
      />
    )
  }

  if (selectedStep === 1) {
    return (
      <SecondStep
        setSelectedStep={setSelectedStep}
        secondStep={steps.secondStep}
        setSteps={setSteps}
      />
    )
  }

  if (selectedStep === 2) {
    return (
      <ThirdStep
        setSelectedStep={setSelectedStep}
        thirdStep={steps.thirdStep}
        setSteps={setSteps}
      />
    )
  }

  if (selectedStep === 3) {
    return (
      <FourthStep
        steps={steps}
        aiGuessData={aiGuessData}
        setAIGuessData={setAIGuessData}
        setSelectedStep={setSelectedStep}
      />
    )
  }

  if (selectedStep === 4) {
    return (
      <FifthStep aiGuessData={aiGuessData} setSelectedStep={setSelectedStep} />
    )
  }

  if (selectedStep === 5) {
    return <SixthStep setSelectedStep={setSelectedStep} />
  }

  if (selectedStep === 6) {
    return <SeventhStep />
  }
  return null
}
