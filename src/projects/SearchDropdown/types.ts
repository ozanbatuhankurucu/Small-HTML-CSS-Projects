export interface Option<ValueType = string> {
  key: string
  label: string
  value: ValueType
  tooltipDescription?: string
  sectionTitle?: string
}
export interface AccordionOption<ValueType = string> {
  key: string
  accordionTitle: string
  options: Option<ValueType>[]
}
