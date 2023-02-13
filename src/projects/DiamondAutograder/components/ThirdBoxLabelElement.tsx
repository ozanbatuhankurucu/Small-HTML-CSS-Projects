import React, { FC } from 'react'
import { ThirdStepSelectedValuePartialType } from '../types'

interface ThirdBoxLabelElementProps {
  selectedValue: ThirdStepSelectedValuePartialType
  label: string
}
export const ThirdBoxLabelElement: FC<ThirdBoxLabelElementProps> = ({
  selectedValue,
  label
}) => {
  const {
    topImagePreview,
    leftImagePreview,
    bottomImagePreview,
    rightImagePreview,
    topLeftImagePreview,
    topRightImagePreview,
    bottomLeftImagePreview,
    bottomRightImagePreview
  } = selectedValue || {}

  if (selectedValue) {
    return (
      <div className='flex flex-wrap gap-1'>
        {topImagePreview && (
          <img
            src={topImagePreview}
            width={36}
            height={33}
            alt='top-img-preview'
          />
        )}
        {leftImagePreview && (
          <img
            src={leftImagePreview}
            width={34}
            height={33}
            alt='left-img-preview'
          />
        )}
        {bottomImagePreview && (
          <img
            src={bottomImagePreview}
            width={32}
            height={33}
            alt='bottom-img-preview'
          />
        )}
        {rightImagePreview && (
          <img
            src={rightImagePreview}
            width={31}
            height={33}
            alt='right-img-preview'
          />
        )}
        {topLeftImagePreview && (
          <img
            src={topLeftImagePreview}
            width={36}
            height={33}
            alt='top-left-img-preview'
          />
        )}
        {topRightImagePreview && (
          <img
            src={topRightImagePreview}
            width={34}
            height={33}
            alt='top-right-img-preview'
          />
        )}
        {bottomLeftImagePreview && (
          <img
            src={bottomLeftImagePreview}
            width={32}
            height={33}
            alt='bottom-left-img-preview'
          />
        )}
        {bottomRightImagePreview && (
          <img
            src={bottomRightImagePreview}
            width={31}
            height={33}
            alt='bottom-right-img-preview'
          />
        )}
      </div>
    )
  }

  if (!selectedValue) {
    return <span className='font-bold text-xs text-[#B1B5C1]'>{label}</span>
  }
  return null
}
