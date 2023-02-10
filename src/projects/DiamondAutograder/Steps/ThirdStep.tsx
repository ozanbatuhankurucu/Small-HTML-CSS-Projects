import React, { FC, useEffect } from 'react'
import { UploadFileBox } from '../components/UploadFileBox'
import { FileInputEvent, Step, StepsDataType, ThirdStepType } from '../types'
import cx from 'classnames'
import { getFirstEmptyStep } from '../utils'
interface ThirdStepProps {
  setSelectedStep: (selectedStep: number) => void
  steps: StepsDataType
  setSteps: React.Dispatch<React.SetStateAction<StepsDataType>>
}

export const ThirdStep: FC<ThirdStepProps> = ({
  setSelectedStep,
  steps,
  setSteps
}) => {
  const handleFileChange = (
    event: FileInputEvent,
    imagePreview: string,
    type: string
  ) => {
    setSteps((prev) => ({
      ...prev,
      thirdStep: {
        ...prev.thirdStep,
        selectedValue: {
          ...prev.thirdStep.selectedValue,
          [`${type}File`]: event.target.files[0],
          [`${type}ImagePreview`]: imagePreview
        }
      }
    }))
  }

  const handleCompleteButtonOnClick = () => {
    setSelectedStep(getFirstEmptyStep(steps))
  }

  return (
    <div>
      <div className='font-normal text-sm'>Upload diamond images</div>
      <div className='grid grid-cols-2 gap-4 mt-4'>
        <UploadFileBox
          label={<span className='font-bold text-xs text-[#B1B5C1]'>Top</span>}
          fileChange={(event, imagePreview) =>
            handleFileChange(event, imagePreview, 'top')
          }
        />
        <UploadFileBox
          label={<span className='font-bold text-xs text-[#B1B5C1]'>Left</span>}
          fileChange={(event, imagePreview) =>
            handleFileChange(event, imagePreview, 'left')
          }
        />
        <UploadFileBox
          label={
            <span className='font-bold text-xs text-[#B1B5C1]'>Bottom</span>
          }
          fileChange={(event, imagePreview) =>
            handleFileChange(event, imagePreview, 'bottom')
          }
        />
        <UploadFileBox
          label={
            <span className='font-bold text-xs text-[#B1B5C1]'>Right</span>
          }
          fileChange={(event, imagePreview) =>
            handleFileChange(event, imagePreview, 'right')
          }
        />
      </div>
      <button
        className='py-2 px-9 border border-[#E4E4E8] text-[#E4E4E8] rounded-[20px] mt-[62px]'
        onClick={handleCompleteButtonOnClick}>
        Complete
      </button>
    </div>
  )
}
