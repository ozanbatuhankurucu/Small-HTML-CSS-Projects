import cx from 'classnames'
import React, { FC } from 'react'

import { StepsDataType } from '../types'
import { getBoxIsSelectedCondition } from '../utils'
import { Box } from './Box'
import { BoxLabel } from './BoxLabel'
import { ThirdBoxLabelElement } from './ThirdBoxLabelElement'

interface StepsProps {
  steps: StepsDataType
  selectedStep: number
  setSelectedStep: (step: number) => void
}
export const Steps: FC<StepsProps> = ({
  steps,
  selectedStep,
  setSelectedStep
}) => {
  const { firstStep, secondStep, thirdStep } = steps
  const isStepClickable = !(selectedStep >= Object.keys(steps).length)

  return (
    <div className='flex flex-col gap-5 items-center justify-center'>
      <Box
        className={cx({
          'cursor-pointer': isStepClickable
        })}
        key={firstStep.key}
        icon={firstStep.icon}
        label={
          <BoxLabel
            selectedValue={firstStep.selectedValue}
            label={firstStep.label}
          />
        }
        isSelected={getBoxIsSelectedCondition(selectedStep, firstStep.step)}
        onClick={() => setSelectedStep(0)}
        isDisabled={!isStepClickable}
      />
      <Box
        className={cx({
          'cursor-pointer': isStepClickable
        })}
        key={secondStep.key}
        icon={secondStep.icon}
        label={
          <BoxLabel
            selectedValue={secondStep.selectedValue}
            label={secondStep.label}
          />
        }
        isSelected={getBoxIsSelectedCondition(selectedStep, secondStep.step)}
        onClick={() => setSelectedStep(1)}
        isDisabled={!isStepClickable}
      />
      <Box
        className={cx({
          'flex items-end justify-between gap-[6px] !pl-[11px] !pr-[14px]':
            thirdStep.selectedValue,
          'cursor-pointer': isStepClickable
        })}
        key={thirdStep.key}
        icon={thirdStep.icon}
        iconClassName={cx('-mt-[6px]', {
          '!-mt-[15px]': thirdStep.selectedValue
        })}
        label={
          <ThirdBoxLabelElement
            selectedValue={thirdStep.selectedValue}
            label={thirdStep.label}
          />
        }
        isSelected={getBoxIsSelectedCondition(selectedStep, thirdStep.step)}
        onClick={() => setSelectedStep(2)}
        isDisabled={!isStepClickable}
      />
    </div>
  )
}
