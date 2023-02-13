import React, { FC, useRef, useState } from 'react'
import { UploadSimple } from 'phosphor-react'
import { FileInputEvent } from '../types'

interface UploadFileBoxProps {
  label?: React.ReactElement
  imgPreview?: string
  fileChange?: (event: FileInputEvent, imagePreview: string) => void
}
export const UploadFileBox: FC<UploadFileBoxProps> = ({
  label,
  imgPreview,
  fileChange
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDivOnClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: FileInputEvent) => {
    const imagePreview = URL.createObjectURL(event.target.files[0])
    fileChange?.(event, imagePreview)
    setImagePreview(imagePreview)
  }
  const img = imagePreview || imgPreview
  return (
    <div
      className='bg-[#272E3F] pt-3 pb-2 px-4 rounded-lg w-[200px] cursor-pointer border border-[#272E3F] hover:border-white'
      onClick={handleDivOnClick}>
      {label}
      <div className='flex justify-end -mt-6'>
        {!img && <UploadSimple size={32} />}
        {img && <img src={img} width={51} height={45} alt='Preview' />}
      </div>
      <input
        type='file'
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  )
}
