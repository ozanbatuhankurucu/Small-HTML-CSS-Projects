import React, { FC, useEffect, useState } from 'react'
import { TextLoadingIndicator } from '../components/TextLoadingIndicator'
import { AIGuessDataType, AIGuessResponse, StepsDataType } from '../types'
import axios from 'axios'
import useSWR from 'swr'
import { GuessDiamond } from '../components/GuessDiamond'
import cx from 'classnames'
import _ from 'lodash'

interface FourthStepProps {
  steps: StepsDataType
  aiGuessData: AIGuessDataType | undefined
  setAIGuessData: React.Dispatch<
    React.SetStateAction<AIGuessDataType | undefined>
  >
  setSelectedStep: (step: number) => void
}
export const FourthStep: FC<FourthStepProps> = ({
  steps,
  aiGuessData,
  setAIGuessData,
  setSelectedStep
}) => {
  const { data, error, mutate, isLoading } = useSWR<AIGuessResponse>(
    'https://hydra-dev.internal.arena-ai.com/hydra/api/hydra/core/diamond',
    async () => {
      const { firstStep, secondStep, thirdStep } = steps
      const formData = new FormData()

      formData.append('file', thirdStep.selectedValue?.topFile as File)
      formData.append(
        'payload',
        JSON.stringify({
          shape: firstStep.selectedValue,
          color: '',
          weight: secondStep.selectedValue
        })
      )

      try {
        const response = await axios.post(
          'https://hydra-dev.internal.arena-ai.com/hydra/api/hydra/core/diamond',
          formData,
          {
            headers: {
              accept: 'application/json',
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        return response.data
      } catch (error) {
        console.error(error)
        setAIGuessData({
          diamond_id: '18526cf8-2299-41c5-842c-cbec58e41cd1',
          first_guess: 'I2',
          second_guess: 'SI2'
        })
        return error
      }
    },
    { revalidateOnFocus: false }
  )

  const { first_guess, second_guess, isFirstGuessCorrect } = aiGuessData || {}
  const showGuessDiamondElements = aiGuessData && !isLoading
  console.log('%c -----aiGuessData----- ', 'background: #FF0000')
  console.log(aiGuessData)
  console.log('%c -----aiGuessData----- ', 'background: #FF0000')

  return (
    <div>
      {isLoading && <TextLoadingIndicator />}
      {showGuessDiamondElements && (
        <>
          <GuessDiamond
            label='First guess'
            guess={first_guess as string}
            correctGuessOnClick={() => setSelectedStep(6)}
            notCorrectGuessOnClick={() =>
              setAIGuessData({
                ...aiGuessData,
                isFirstGuessCorrect: false
              })
            }
          />

          {!_.isNil(isFirstGuessCorrect) && (
            <GuessDiamond
              label='Second guess'
              guess={second_guess as string}
              correctGuessOnClick={() => setSelectedStep(6)}
              notCorrectGuessOnClick={() => setSelectedStep(4)}
            />
          )}
        </>
      )}
    </div>
  )
}
