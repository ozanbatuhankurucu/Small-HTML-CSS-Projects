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
  const {
    bottomImagePreview,
    leftImagePreview,
    rightImagePreview,
    topImagePreview,
    topLeftImagePreview,
    topRightImagePreview,
    bottomLeftImagePreview,
    bottomRightImagePreview
  } = steps?.thirdStep?.selectedValue || {}

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
          imgPreview={topImagePreview}
        />
        <UploadFileBox
          label={<span className='font-bold text-xs text-[#B1B5C1]'>Left</span>}
          fileChange={(event, imagePreview) =>
            handleFileChange(event, imagePreview, 'left')
          }
          imgPreview={leftImagePreview}
        />
        <UploadFileBox
          label={
            <span className='font-bold text-xs text-[#B1B5C1]'>Bottom</span>
          }
          fileChange={(event, imagePreview) =>
            handleFileChange(event, imagePreview, 'bottom')
          }
          imgPreview={bottomImagePreview}
        />
        <UploadFileBox
          label={
            <span className='font-bold text-xs text-[#B1B5C1]'>Right</span>
          }
          fileChange={(event, imagePreview) =>
            handleFileChange(event, imagePreview, 'right')
          }
          imgPreview={rightImagePreview}
        />
        <UploadFileBox
          label={
            <span className='font-bold text-xs text-[#B1B5C1]'>Top-Right</span>
          }
          fileChange={(event, imagePreview) =>
            handleFileChange(event, imagePreview, 'topRight')
          }
          imgPreview={topRightImagePreview}
        />
        <UploadFileBox
          label={
            <span className='font-bold text-xs text-[#B1B5C1]'>Top-Left</span>
          }
          fileChange={(event, imagePreview) =>
            handleFileChange(event, imagePreview, 'topLeft')
          }
          imgPreview={topLeftImagePreview}
        />
        <UploadFileBox
          label={
            <span className='font-bold text-xs text-[#B1B5C1]'>
              Bottom-Right
            </span>
          }
          fileChange={(event, imagePreview) =>
            handleFileChange(event, imagePreview, 'bottomRight')
          }
          imgPreview={bottomRightImagePreview}
        />
        <UploadFileBox
          label={
            <span className='font-bold text-xs text-[#B1B5C1]'>
              Bottom-Left
            </span>
          }
          fileChange={(event, imagePreview) =>
            handleFileChange(event, imagePreview, 'bottomLeft')
          }
          imgPreview={bottomLeftImagePreview}
        />
      </div>
      <button
        className='py-2 px-9 bg-[#272E3F]  border border-[#272E3F] hover:border-white text-[#E4E4E8] rounded-[20px] mt-[62px]'
        onClick={handleCompleteButtonOnClick}>
        Get Clarity
      </button>
    </div>
  )
}
