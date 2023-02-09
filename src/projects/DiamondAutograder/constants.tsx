import _ from 'lodash'
import { UploadSimple } from 'phosphor-react'
import { v4 } from 'uuid'
import { DiamondClarityType, Shape, StepsDataType } from './types'

export const stepsData: StepsDataType = _.mapValues(
  {
    firstStep: {
      label: 'Select...',
      icon: <span className='font-normal text-xs'>Shape</span>,
      step: 0
    },
    secondStep: {
      label: 'Select...',
      icon: <span className='font-normal text-xs'>Weight</span>,
      step: 1
    },
    thirdStep: {
      label: 'Upload...',
      icon: <UploadSimple size={20} />,
      step: 2
    }
  },
  (step) => ({ ...step, key: v4() })
)

export const SHAPES: Shape[] = [
  'Round',
  'Princess',
  'Pear',
  'Oval',
  'Heart',
  'Marquise'
]

export const DIAMOND_CLARITY_OPTIONS: DiamondClarityType[] = [
  'I2',
  'I1',
  'SI2',
  'SI1',
  'VS2',
  'VS1',
  'VVS2',
  'VVS1',
  'FL'
]
