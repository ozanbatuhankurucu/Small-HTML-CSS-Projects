import React from 'react'

export function BoxLabel({
  selectedValue,
  label
}: {
  selectedValue: number | string | undefined
  label: string
}) {
  return (
    <span className='font-bold text-xs text-[#B1B5C1]'>
      {selectedValue ?? label}
    </span>
  )
}
