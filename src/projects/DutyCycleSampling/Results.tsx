import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import cx from 'classnames'
import { Check, Lock } from 'phosphor-react'
import { FileElement } from './components/FileElement'
import { TextElement } from './components/TextElement'
import { DCS_DATA_RESPONSE_MOCK } from './constants'
import { StateValues, SummaryResult } from './types'
import ErrorImage from './images/ErrorImage.png'

export const Results = () => {
  const location = useLocation()
  const { applicationName, rawDramLogsFile, sutId } =
    location.state as StateValues

  const [selectedRequirement, setSelectedRequirement] =
    useState<SummaryResult>()

  const {
    takeaway_title: takeawayTitle,
    takeaway_text: takeawayText,
    summary_results: summaryResults
  } = DCS_DATA_RESPONSE_MOCK

  return (
    <div className='px-[52px] pt-4'>
      <div className='flex'>
        <TextElement label='SUT ID' text={sutId} />
        <TextElement
          className='ml-12'
          label='Application Name'
          text={applicationName}
        />
        <FileElement
          className='ml-[78px]'
          label='Raw DRAM Logs'
          text={rawDramLogsFile?.name as string}
        />
      </div>
      <div className='mt-10 text-white text-base'>
        <div className='font-semibold'>{takeawayTitle}</div>
        <div>{takeawayText}</div>
      </div>

      <div className='flex gap-[120px] mt-8 pb-4'>
        <div className='flex flex-col'>
          <span className='font-normal text-sm text-white'>Requirements</span>
          <div className='flex flex-col mt-[10px] gap-[22px]'>
            {summaryResults?.map((summaryResult) => {
              const { error_code: errorCode, result } = summaryResult
              return (
                <div
                  role='button'
                  key={errorCode}
                  className={cx(
                    'flex items-center justify-between bg-[#272E3F] px-4 rounded-lg h-10 w-[200px] text-[#B1B5C1] font-normal text-xs border border-[#272E3F] cursor-pointer hover:border-white',
                    {
                      '!border-white':
                        selectedRequirement?.error_code === errorCode,
                      '!text-[#669467]': result === 'PASS',
                      '!text-[#FF6868] ': result === 'FAIL'
                    }
                  )}
                  onClick={() => setSelectedRequirement(summaryResult)}>
                  <span>{errorCode}</span>
                  {result === 'PASS' && <Check size={25} color='#fff' />}
                </div>
              )
            })}
          </div>
        </div>
        <div>
          {!selectedRequirement && (
            <div className='mt-[76px] relative w-[671px] h-[303px] border-[2px] border-[#272E3F] rounded-lg'>
              <span className='absolute left-1/2 -translate-x-1/2 bottom-[67px] text-[10px] text-[#81859B] font-normal'>
                Select a requirement to plot the respective telemetry channel
              </span>
            </div>
          )}
          {selectedRequirement && (
            <div className='mt-10'>
              <div className='font-semibold text-base text-white'>
                {selectedRequirement.summary}
              </div>
              <div
                style={{
                  backgroundImage: `url(${ErrorImage})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
                className='bg-[#272e3fbf] rounded-md w-[674px] h-[295px] mt-5 relative'>
                <div className='absolute w-[88px] h-[62px] bg-[#272e3fbf] rounded-md flex justify-center items-center left-1/2 -translate-x-1/2 bottom-[110px]'>
                  <Lock size={32} />
                </div>
                <div className='w-full h-full bg-[#272e3f59] rounded-md' />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
