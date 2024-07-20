import React from 'react'
import Photo from './components/Photo'
import Modal from './components/Modal'
import { PHOTOS, sizes } from './constants'
import useModal from './hooks/useModal'

const PhotosBrc = () => {
  const { isOpen, photoSrc, openModal, closeModal } = useModal()

  return (
    <div>
      <div className='flex flex-wrap gap-4 min-h-screen p-4'>
        {PHOTOS.map((photo, index) => (
          <Photo
            key={index}
            src={photo.src}
            size={sizes[index]}
            onClick={() => openModal(photo.src)}
          />
        ))}
      </div>
      <Modal isOpen={isOpen} src={photoSrc} onClose={closeModal} />
    </div>
  )
}

export default PhotosBrc
