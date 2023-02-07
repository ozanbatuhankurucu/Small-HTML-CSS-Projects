import React, { useState } from 'react'
import { stepsData } from './constants'
import { StepContent } from './components/StepContent'
import { Steps } from './components/Steps'
import { Step, StepsDataType } from './types'

export const DiamondAutograder = () => {
  const [steps, setSteps] = useState<StepsDataType>(stepsData)
  const [selectedStep, setSelectedStep] = useState<number>(0)

  return (
    <div className='h-full flex items-center gap-[164px] px-[88px]'>
      <Steps
        steps={steps}
        selectedStep={selectedStep}
        setSelectedStep={setSelectedStep}
      />
      <StepContent
        selectedStep={selectedStep}
        setSelectedStep={setSelectedStep}
        steps={steps}
        setSteps={setSteps}
      />
    </div>
  )
}
