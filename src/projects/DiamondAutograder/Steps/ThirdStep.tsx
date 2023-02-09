import React, { FC, useEffect } from 'react'
import { UploadFileBox } from '../components/UploadFileBox'
import { FileInputEvent, StepsDataType, ThirdStepType } from '../types'

interface ThirdStepProps {
  thirdStep: ThirdStepType
  setSelectedStep: (selectedStep: number) => void
  setSteps: React.Dispatch<React.SetStateAction<StepsDataType>>
}

export const ThirdStep: FC<ThirdStepProps> = ({
  thirdStep,
  setSelectedStep,
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

  useEffect(() => {
    if (thirdStep.selectedValue) {
      const { bottomFile, leftFile, rightFile, topFile } =
        thirdStep.selectedValue
      if (bottomFile && leftFile && rightFile && topFile) {
        setSelectedStep(3)
      }
    }
  }, [thirdStep])

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
    </div>
  )
}
