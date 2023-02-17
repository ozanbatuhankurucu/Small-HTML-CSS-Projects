import React, { FC } from 'react'
import styled from 'styled-components'
import cx from 'classnames'

const Input = styled.input`
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    background: #231523;
    border-radius: 50%;
    cursor: pointer;
    background: #191926;
    border: 2px solid #6cffa7;
  }
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: #231523;
    border-radius: 50%;
    cursor: pointer;
    background: #191926;
    border: 2px solid #6cffa7;
  }
`

interface NumberPickerProps {
  className?: string
  min: number
  max: number
  step: number
  value: number
  onChange: (value: number) => void
}
const NumberPicker: FC<NumberPickerProps> = ({
  className,
  max,
  min,
  step,
  value = 0,
  onChange
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value))
  }

  return (
    <>
      <Input
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className={cx(
          'w-[414px] h-[2px] bg-[#515674] appearance-none rounded-[4px] cursor-pointer',
          className
        )}
      />
      <div className='flex justify-between mt-1'>
        {Array.from({ length: max + 1 }, (v, i) => i).map((number) => (
          <div key={number} className='flex flex-col gap-2 items-center'>
            <div className='h-2 border-r-[1px] border-[#515674]' />
            <div className='text-xs font-normal text-[#515674]'>
              {number.toFixed(1)}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default NumberPicker
