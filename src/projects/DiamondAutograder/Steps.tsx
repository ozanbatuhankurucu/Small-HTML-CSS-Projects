import _ from 'lodash'
import React, { FC } from 'react'
import { Box } from './Box'
import { Step, StepsDataType } from './types'

interface StepsProps {
  steps: StepsDataType
  selectedStep: number
  setSelectedStep: (selectedStep: number) => void
}
export const Steps: FC<StepsProps> = ({
  steps,
  selectedStep,
  setSelectedStep
}) => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center'>
      {_.map(steps, ({ icon, label, step, key, selectedValue }) => (
        <Box
          key={key}
          icon={icon}
          label={selectedValue ?? label}
          isSelected={selectedStep !== undefined && step === selectedStep}
          onClick={() => setSelectedStep(step)}
        />
      ))}
    </div>
  )
}
