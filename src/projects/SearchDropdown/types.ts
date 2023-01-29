import { ReactElement } from 'react'

export interface Option<ValueType = string> {
  key: string
  label: string
  labelElement?: ReactElement
  value: ValueType
  sectionTitle?: string
}
export interface AccordionOption<ValueType = string> {
  key: string
  accordionTitle: string
  options: Option<ValueType>[]
}
