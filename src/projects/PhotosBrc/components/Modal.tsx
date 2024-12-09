/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { generatedPhotos } from '../constants'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  selectedPhotoIndex: number | null
  setSelectedPhotoIndex: (index: number) => void
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  selectedPhotoIndex,
  setSelectedPhotoIndex,
  onClose
}) => {
  const src =
    selectedPhotoIndex !== null ? generatedPhotos[selectedPhotoIndex].src : null

  if (!isOpen || !src) return null

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handlePrevClick = () => {
    if (selectedPhotoIndex !== null && selectedPhotoIndex > 0) {
      setSelectedPhotoIndex(selectedPhotoIndex - 1)
    }
  }

  const handleNextClick = () => {
    if (
      selectedPhotoIndex !== null &&
      selectedPhotoIndex < generatedPhotos.length - 1
    ) {
      setSelectedPhotoIndex(selectedPhotoIndex + 1)
    }
  }

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
      onClick={handleBackgroundClick}>
      <div className='relative bg-white rounded-lg max-h-[80vh] max-w-[80vw] w-full h-full md:w-[80vw] md:h-[80vh] overflow-hidden'>
        <button
          type='button'
          onClick={onClose}
          className='absolute top-2 right-2 text-black text-3xl'>
          X
        </button>
        <div className='flex items-center justify-center h-full w-full'>
          <button
            onClick={handlePrevClick}
            className='absolute left-2 text-black text-3xl'>
            &#8592;
          </button>
          <img
            src={src}
            className='object-contain w-full h-full'
            alt='modal content'
          />
          <button
            onClick={handleNextClick}
            className='absolute right-2 text-black text-3xl'>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
