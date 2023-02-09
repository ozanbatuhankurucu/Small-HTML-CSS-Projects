import React from 'react'

export interface FirstStepType extends Step {
  selectedValue?: string
}
export interface SecondStepType extends Step {
  selectedValue?: number
}
export interface ThirdStepType extends Step {
  selectedValue?: ThirdStepSelectedValuePartialType
}
export interface ThirdStepSelectedValueType {
  topFile: File
  topImagePreview: string
  leftFile: File
  leftImagePreview: string
  bottomFile: File
  bottomImagePreview: string
  rightFile: File
  rightImagePreview: string
}
export type ThirdStepSelectedValuePartialType =
  | Partial<ThirdStepSelectedValueType>
  | undefined
export interface StepsDataType {
  firstStep: FirstStepType
  secondStep: SecondStepType
  thirdStep: ThirdStepType
}
export interface Step {
  label: string
  step: number
  icon: React.ReactElement
  key: string
}

export type Shape =
  | 'Round'
  | 'Princess'
  | 'Pear'
  | 'Oval'
  | 'Heart'
  | 'Marquise'

export interface FileInputEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & {
    files: FileList
  }
}

export interface AIGuessResponse {
  diamond_id: string
  first_guess: string
  second_guess: string
}

export type AIGuessDataType = AIGuessResponse & {
  isFirstGuessCorrect?: boolean
}

export type DiamondClarityType =
  | 'I2'
  | 'I1'
  | 'SI2'
  | 'SI1'
  | 'VS2'
  | 'VS1'
  | 'VVS2'
  | 'VVS1'
  | 'FL'
