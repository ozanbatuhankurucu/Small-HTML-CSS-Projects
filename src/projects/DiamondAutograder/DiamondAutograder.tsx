import React, { useState } from 'react'
import { stepsData } from './constants'
import { StepContent } from './components/StepContent'
import { Steps } from './components/Steps'
import { AIGuessDataType, StepsDataType } from './types'

export const DiamondAutograder = () => {
  const [steps, setSteps] = useState<StepsDataType>(stepsData)
  const [selectedStep, setSelectedStep] = useState<number>(0)
  const [aiGuessData, setAIGuessData] = useState<AIGuessDataType>()

  const handleGradeAnotherButtonOnClick = () => {
    setSelectedStep(0)
    setSteps(stepsData)
    setAIGuessData(undefined)
  }

  return (
    <div className='h-full flex items-center gap-[164px] px-[88px]'>
      <Steps steps={steps} selectedStep={selectedStep} />
      <StepContent
        selectedStep={selectedStep}
        setSelectedStep={setSelectedStep}
        steps={steps}
        setSteps={setSteps}
        aiGuessData={aiGuessData}
        setAIGuessData={setAIGuessData}
      />
      {selectedStep === 6 && (
        <button
          className='fixed bottom-[54px] left-0 right-0 mx-auto bg-[#272E3F] rounded-lg text-white text-lg font-normal w-[250px] h-[58px] flex justify-center items-center'
          onClick={handleGradeAnotherButtonOnClick}>
          Grade another
        </button>
      )}
    </div>
  )
}
