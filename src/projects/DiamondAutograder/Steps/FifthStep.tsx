import React, { FC } from 'react'
import cx from 'classnames'
import { AIGuessDataType } from '../types'
import { DIAMOND_CLARITY_OPTIONS } from '../constants'

interface FifthStepProps {
  aiGuessData: AIGuessDataType | undefined
  setSelectedStep: (step: number) => void
}
export const FifthStep: FC<FifthStepProps> = ({
  aiGuessData,
  setSelectedStep
}) => {
  const { first_guess: firstGuess, second_guess: secondGuess } =
    aiGuessData || {}
  const guesses = [firstGuess, secondGuess]
  const handleDiamondClarity = () => {
    setSelectedStep(5)
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
                type='button'
                key={diamondClarity}
                className={cx(
                  'text-[#ffffff80] font-normal text-2xl hover:text-white disabled:text-[#ffffff1a]'
                )}
                onClick={handleDiamondClarity}
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
