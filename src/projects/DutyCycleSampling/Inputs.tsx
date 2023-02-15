import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DragAndDropFile from './components/DragAndDropFile'
import { Input } from './components/Input'
import { StateValues } from './types'
import cx from 'classnames'
import { FileElement } from './components/FileElement'
import { APPLICATION_OPTIONS } from './constants'

export const Inputs = () => {
  const navigate = useNavigate()
  const [stateValues, setStateValues] = useState<StateValues>({
    sutId: '',
    applicationName: '',
    rawDramLogs: null
  })
  const { applicationName, sutId, rawDramLogs } = stateValues
  const isResultsButtonEnabled = applicationName && sutId && rawDramLogs

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
          onChange={(value) =>
            setStateValues((prev) => ({ ...prev, sutId: value }))
          }
          placeholder='...'
        />
        <div className='mt-8'>
          <label className='font-normal text-sm'>Raw DRAM Logs</label>
          <div className='flex items-end gap-4 mt-4'>
            {APPLICATION_OPTIONS.map((appOption) => (
              <button
                className={cx(
                  'flex items-center bg-[#272E3F] px-4 rounded-lg h-10 w-[200px] text-[#B1B5C1] font-normal text-xs border border-[#272E3F] hover:border-white',
                  {
                    '!border-white': applicationName === appOption
                  }
                )}
                onClick={() =>
                  setStateValues((prev) => ({
                    ...prev,
                    applicationName: appOption
                  }))
                }>
                {appOption}
              </button>
            ))}
          </div>
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
          {rawDramLogs && <FileElement text={rawDramLogs.name} />}
        </div>
        <button
          type='button'
          className={cx(
            'border border-[#272E3F] py-2 px-9 text-[#E4E4E8] rounded-[20px] mt-[62px] hover:border-white',
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
