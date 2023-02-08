import React, { FC, useState } from 'react'
import NumberPicker from '../components/NumberPicker'
import cx from 'classnames'
import { SecondStepType, Step, StepsDataType } from '../types'

interface SecondStepProps {
  secondStep: SecondStepType
  setSelectedStep: (selectedStep: number) => void
  setSteps: React.Dispatch<React.SetStateAction<StepsDataType>>
}
export const SecondStep: FC<SecondStepProps> = ({
  secondStep,
  setSelectedStep,
  setSteps
}) => {
  const { selectedValue } = secondStep
  const isSelectedCaratNumberBiggerThanZero = (selectedValue as number) > 0

  const handleNumberPickerOnChange = (value: number) => {
    setSteps((prev) => ({
      ...prev,
      secondStep: {
        ...prev.secondStep,
        selectedValue: value === 0 ? undefined : parseFloat(value.toFixed(2))
      }
    }))
  }

  return (
    <div className='-mt-10'>
      <div className='font-normal text-sm'>What is the diamond’s weight?</div>
      <div className='font-normal text-sm mt-11'>Carats</div>
      <NumberPicker
        className='mt-4'
        min={0}
        max={9}
        step={0.01}
        value={selectedValue as number}
        onChange={handleNumberPickerOnChange}
      />
      <div className='flex items-center justify-center mt-14 w-[70px] h-8 py-1 pl-2 pr-[10px] bg-[#272E3F] rounded-lg'>
        <div className='w-6'>
          {isSelectedCaratNumberBiggerThanZero && (
            <span className='text-[#B1B5C1] text-xs font-normal'>
              {selectedValue}
            </span>
          )}
        </div>
        <div className='border-r-[1px] border-[#515674] h-full ml-[11px]'></div>
        <span className='text-[#515674] text-xs font-normal ml-2'>C</span>
      </div>
      <button
        className={cx(
          'py-2 px-[13px] w-[70px] border border-[#515674] text-[#515674] rounded-[20px] mt-[62px]',
          {
            '!border-[#E4E4E8] !text-[#E4E4E8]':
              isSelectedCaratNumberBiggerThanZero
          }
        )}
        disabled={!isSelectedCaratNumberBiggerThanZero}
        onClick={() => setSelectedStep(2)}>
        Next
      </button>
    </div>
  )
}
