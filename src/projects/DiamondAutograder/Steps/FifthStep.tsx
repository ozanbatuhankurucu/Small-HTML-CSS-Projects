import React, { FC } from 'react'
import { AIGuessDataType, DiamondClarityType } from '../types'
import cx from 'classnames'
import { DIAMOND_CLARITY_OPTIONS } from '../constants'

interface FifthStepProps {
  aiGuessData: AIGuessDataType | undefined
  setSelectedStep: (step: number) => void
}
export const FifthStep: FC<FifthStepProps> = ({
  aiGuessData,
  setSelectedStep
}) => {
  const { first_guess, second_guess } = aiGuessData || {}
  const guesses = [first_guess, second_guess]
  const handleDiamondClarity = (diamondClarity: DiamondClarityType) => {
    setSelectedStep(5)
    // TODOOzan: Send user clarity answer to the backend when returned response
    // setStep to 5(sixth step) show the Thank you message
    // after showing this message for a while on the screen
    // set step to 6.
  }
  return (
    <>
      {aiGuessData && (
        <div className='flex flex-col items-center -mt-20 -ml-28 w-[700px]'>
          <span className='font-normal text-xs text-white'>
            Teach the AI this diamond’s clarity...
          </span>
          <div className='flex gap-8 py-3 px-8 bg-[#272E3F] rounded-lg mt-4'>
            {DIAMOND_CLARITY_OPTIONS.map((diamondClarity) => (
              <button
                key={diamondClarity}
                className={cx(
                  'text-[#ffffff80] font-normal text-2xl hover:text-white disabled:text-[#ffffff1a]'
                )}
                onClick={() => handleDiamondClarity(diamondClarity)}
                disabled={guesses.includes(diamondClarity)}>
                {diamondClarity}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
