import React, { FC } from 'react'
import NumberPicker from '../components/NumberPicker'
import { SecondStepType, StepsDataType } from '../types'

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
    <div>
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
        <div className='border-r-[1px] border-[#515674] h-full ml-[11px]' />
        <span className='text-[#515674] text-xs font-normal ml-2'>C</span>
      </div>
      <button
        type='button'
        className='py-2 px-9 bg-[#272E3F]  border border-[#272E3F] hover:border-white text-[#E4E4E8] rounded-[20px] mt-[62px]'
        onClick={() => setSelectedStep(2)}>
        Next
      </button>
    </div>
  )
}
