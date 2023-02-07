import React, { FC } from 'react'
import { FirstStep } from '../Steps/FirstStep'
import { SecondStep } from '../Steps/SecondStep'
import { StepsDataType } from '../types'

interface StepContentProps {
  selectedStep: number
  setSelectedStep: (step: number) => void
  steps: StepsDataType
  setSteps: React.Dispatch<React.SetStateAction<StepsDataType>>
}
export const StepContent: FC<StepContentProps> = ({
  selectedStep,
  setSelectedStep,
  steps,
  setSteps
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
    return <SecondStep />
  }
  return null
}
