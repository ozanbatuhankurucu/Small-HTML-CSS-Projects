import React, { useState } from 'react'
import cx from 'classnames'
import { UploadSimple } from 'phosphor-react'

type DragAndDropProps = {
  className?: string
  onChange: (file: File) => void
}

const DragAndDropFile: React.FC<DragAndDropProps> = ({
  className,
  onChange
}) => {
  const [dragging, setDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    setFile(droppedFile)
    onChange(droppedFile)
  }

  const handleUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0]
    if (uploadedFile) {
      setFile(uploadedFile)
      onChange(uploadedFile)
    }
  }

  return (
    <div
      className={cx(
        'flex flex-col items-center justify-center border-[0.5px] border-dashed border-[#81859B] cursor-pointer text-[#81859B] text-[10px] font-normal rounded-lg hover:border-white',
        className,
        {
          '!border-white': dragging
        }
      )}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => {
        const input = document.createElement('input')
        input.type = 'file'
        input.onchange = handleUploadFile as unknown as (
          this: GlobalEventHandlers,
          ev: Event
        ) => any
        input.click()
      }}>
      {file ? (
        <p className='text-center'>File uploaded: {file.name}</p>
      ) : (
        <div className='flex flex-col items-center gap-2'>
          <UploadSimple size={20} />
          <p>Click to upload or drag and drop a file</p>
        </div>
      )}
    </div>
  )
}

export default DragAndDropFile
