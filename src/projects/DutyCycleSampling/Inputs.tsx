import { CheckCircle, FileDotted } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DragAndDropFile from './components/DragAndDropFile'
import { Input } from './components/Input'
import { StateValues } from './types'
import cx from 'classnames'

export const Inputs = () => {
  const navigate = useNavigate()
  const [stateValues, setStateValues] = useState<StateValues>({
    sutId: '',
    firstApplicationName: 'TimeSpy Extreme, GT1',
    secondApplicationName: 'TimeSpy Extreme, GT2',
    rawDramLogs: null
  })
  const { firstApplicationName, secondApplicationName, sutId, rawDramLogs } =
    stateValues
  const isResultsButtonEnabled =
    firstApplicationName && secondApplicationName && sutId && rawDramLogs

  const handleInputOnChange = (value: string, key: string) => {
    setStateValues((prev) => ({ ...prev, [key]: value }))
  }

  const handleResultsButtonOnClick = () => {
    if (isResultsButtonEnabled) {
      navigate('/projects/duty-cycle-sampling/results', { state: stateValues })
    }
  }

  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <div>
        <Input
          type='text'
          label='SUT ID'
          value={sutId}
          onChange={(value) => handleInputOnChange(value, 'sutId')}
          placeholder='...'
        />
        <div className='flex items-end gap-4 mt-8'>
          <Input
            type='text'
            label='Application Name'
            value={firstApplicationName}
            onChange={(value) =>
              handleInputOnChange(value, 'firstApplicationName')
            }
          />
          <Input
            className='!font-normal'
            type='text'
            value={secondApplicationName}
            onChange={(value) =>
              handleInputOnChange(value, 'secondApplicationName')
            }
          />
        </div>
        <div className='mt-[52px]'>
          <label className='font-normal text-sm'>Raw DRAM Logs</label>
          {!rawDramLogs && (
            <DragAndDropFile
              className='mt-3 w-[414px] py-5 px-4'
              onChange={(file) =>
                setStateValues((prev) => ({ ...prev, rawDramLogs: file }))
              }
            />
          )}
          {rawDramLogs && (
            <div className='flex items-end gap-2 p-3 bg-[#272E3F] rounded-[6px] mt-4'>
              <FileDotted size={20} />
              <span className='w-[245px] text-ellipsis whitespace-nowrap overflow-hidden text-xs font-normal'>
                {rawDramLogs.name}
              </span>
              <span className='text-[#6CFFA7] text-xs font-normal'>
                Upload complete
              </span>
              <CheckCircle size={20} color='#6CFFA7' />
            </div>
          )}
        </div>
        <button
          type='button'
          className={cx(
            'border border-[#272E3F] py-2 px-9 text-[#E4E4E8] rounded-[20px] mt-[62px]',
            { '!bg-[#272E3F]': isResultsButtonEnabled }
          )}
          onClick={handleResultsButtonOnClick}
          disabled={!isResultsButtonEnabled}>
          Go to results
        </button>
      </div>
    </div>
  )
}
