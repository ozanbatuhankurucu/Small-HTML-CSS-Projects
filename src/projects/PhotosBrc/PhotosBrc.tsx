import React from 'react'
import Photo from './components/Photo'
import Modal from './components/Modal'
import useModal from './hooks/useModal'
import { generatedPhotos } from './constants'

const PhotosBrc = () => {
  const { isOpen, photoSrc, openModal, closeModal } = useModal()

  return (
    <div className='w-screen h-screen'>
      {generatedPhotos.map((photo, index) => (
        <Photo
          key={index}
          style={{
            position: 'absolute',
            top: photo.y,
            left: photo.x,
            width: photo.size,
            height: photo.size
          }}
          src={photo.src}
          onClick={() => openModal(photo.src)}
          animate={photo.useGrowShrink}
        />
      ))}
      <Modal isOpen={isOpen} src={photoSrc} onClose={closeModal} />
    </div>
  )
}

export default PhotosBrc
