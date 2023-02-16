import cx from 'classnames'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import DragAndDropFile from './components/DragAndDropFile'
import { FileElement } from './components/FileElement'
import { Input } from './components/Input'
import { APPLICATION_OPTIONS } from './constants'
import { StateValues } from './types'

export const Inputs = () => {
  const navigate = useNavigate()
  const [stateValues, setStateValues] = useState<StateValues>({
    sutId: '',
    applicationName: '',
    rawDramLogsFile: null
  })
  const { applicationName, rawDramLogsFile, sutId } = stateValues
  const {
    clearErrors,
    formState: { errors },
    setError
  } = useForm<StateValues>({
    defaultValues: {
      sutId: ''
    }
  })

  const onSubmit = () => {
    if (!sutId) {
      setError('sutId', {
        type: 'manual',
        message: 'This field is required.'
      })
    }

    if (!applicationName) {
      setError('applicationName', {
        type: 'manual',
        message: 'Select an application name'
      })
    }

    if (!rawDramLogsFile) {
      setError('rawDramLogsFile', {
        type: 'manual',
        message: 'Select a file'
      })
    }

    if (applicationName && rawDramLogsFile && sutId) {
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
          onChange={(value) => {
            setStateValues((prev) => ({ ...prev, sutId: value }))
            if (value) {
              clearErrors('sutId')
            } else {
              setError('sutId', {
                type: 'manual',
                message: 'This field is required.'
              })
            }
          }}
          placeholder='...'
          error={errors.sutId?.message}
        />
        <div className='mt-8'>
          <label className='font-normal text-sm'>
            Raw DRAM Logs{' '}
            {errors.applicationName && (
              <span className='text-[#DF2960]'>*</span>
            )}
          </label>
          <div className='flex items-end gap-4 mt-4'>
            {APPLICATION_OPTIONS.map((appOption) => (
              <button
                key={appOption}
                type='button'
                className={cx(
                  'flex items-center bg-[#272E3F] px-4 rounded-lg h-10 w-[200px] text-[#B1B5C1] font-normal text-xs border border-[#272E3F] hover:border-white',
                  {
                    '!border-white': applicationName === appOption
                  }
                )}
                onClick={() => {
                  setStateValues((prev) => ({
                    ...prev,
                    applicationName: appOption
                  }))
                  clearErrors('applicationName')
                }}>
                {appOption}
              </button>
            ))}
          </div>
          {errors.applicationName && (
            <div className='mt-1 text-[#DF2960] font-normal text-xs'>
              {errors.applicationName?.message}
            </div>
          )}
        </div>
        <div className='mt-[52px]'>
          <label className='font-normal text-sm'>
            Raw DRAM Logs
            {errors.rawDramLogsFile && (
              <span className='text-[#DF2960]'> *</span>
            )}
          </label>
          {!rawDramLogsFile && (
            <DragAndDropFile
              className='mt-3 w-[414px] py-5 px-4'
              onChange={(file) => {
                setStateValues((prev) => ({ ...prev, rawDramLogsFile: file }))
                clearErrors('rawDramLogsFile')
              }}
            />
          )}
          {errors.rawDramLogsFile && (
            <div className='mt-1 text-[#DF2960] font-normal text-xs'>
              {errors.rawDramLogsFile?.message}
            </div>
          )}
          {rawDramLogsFile && <FileElement text={rawDramLogsFile.name} />}
        </div>
        <button
          type='button'
          className='border border-[#272E3F] py-2 px-9 text-[#E4E4E8] bg-[#272E3F] rounded-[20px] mt-[62px] hover:border-white'
          onClick={onSubmit}>
          Go to results
        </button>
      </div>
    </div>
  )
}
