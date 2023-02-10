import _ from 'lodash'
import React, { FC, useState } from 'react'
import { Box } from './Box'
import { StepsDataType } from '../types'
import { BoxLabel } from './BoxLabel'
import { getBoxIsSelectedCondition } from '../utils'
import { ThirdBoxLabelElement } from './ThirdBoxLabelElement'
import cx from 'classnames'

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
  const isSelectedThirdBox =
    getBoxIsSelectedCondition(selectedStep, thirdStep.step) &&
    !(
      thirdStep.selectedValue?.topFile &&
      thirdStep.selectedValue?.leftFile &&
      thirdStep.selectedValue?.bottomFile &&
      thirdStep.selectedValue?.rightFile
    )

  return (
    <div className='flex flex-col gap-5 items-center justify-center'>
      <Box
        className='cursor-pointer'
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
      />
      <Box
        className='cursor-pointer'
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
      />
      <Box
        className={cx('cursor-pointer', {
          'flex flex-col gap-[6px] !pl-[11px] !pr-[14px]':
            thirdStep.selectedValue
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
        isSelected={isSelectedThirdBox}
        onClick={() => setSelectedStep(2)}
      />
    </div>
  )
}
