import React from 'react'

export type Steps = 'firstStep' | 'secondStep' | 'thirdStep'
export type StepsDataType = Record<Steps, Step>
export interface Step {
  label: string
  step: number
  icon: React.ReactElement
  key: string
  selectedValue?: string | number
}

export type Shape =
  | 'Round'
  | 'Princess'
  | 'Pear'
  | 'Oval'
  | 'Heart'
  | 'Marquise'
