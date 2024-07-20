import React from 'react'

interface ModalProps {
  isOpen: boolean
  src: string | null
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, src, onClose }) => {
  if (!isOpen || !src) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative bg-white rounded-lg max-h-[80vh] max-w-[80vw] w-full h-full md:w-[80vw] md:h-[80vh] overflow-hidden'>
        <button
          type='button'
          onClick={onClose}
          className='absolute top-2 right-2 text-white text-4xl'>
          X
        </button>
        <div className='flex items-center justify-center h-full w-full'>
          <img
            src={src}
            className='object-cover w-full h-full'
            alt='modal content'
          />
        </div>
      </div>
    </div>
  )
}

export default Modal
