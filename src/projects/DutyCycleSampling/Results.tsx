import React from 'react'
import { useLocation } from 'react-router-dom'
import { FileElement } from './components/FileElement'
import { TextElement } from './components/TextElement'
import { StateValues } from './types'

export const Results = () => {
  const location = useLocation()
  const {
    applicationName: firstApplicationName,
    rawDramLogs,
    sutId
  } = location.state as StateValues

  return (
    <div className='px-[52px] pt-4'>
      <div className='flex'>
        <TextElement label='SUT ID' text={sutId} />
        <TextElement
          className='ml-12'
          label='Application Name'
          text={firstApplicationName}
        />
        <FileElement
          className='ml-[78px]'
          label='Raw DRAM Logs'
          text={rawDramLogs?.name as string}
        />
      </div>
    </div>
  )
}
