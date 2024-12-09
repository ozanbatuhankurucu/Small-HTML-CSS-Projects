import React from 'react'
import Photo from './components/Photo'
import Modal from './components/Modal'
import useModal from './hooks/useModal'
import { generatedPhotos } from './constants'

const PhotosBrc = () => {
  const {
    isOpen,
    selectedPhotoIndex,
    setSelectedPhotoIndex,
    openModal,
    closeModal
  } = useModal()

  return (
    <div className='w-screen h-screen bg-[#FADBD8]'>
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
          onClick={() => openModal(index)}
          animate={photo.useGrowShrink}
          shape={photo.shape}
        />
      ))}
      <Modal
        isOpen={isOpen}
        selectedPhotoIndex={selectedPhotoIndex}
        setSelectedPhotoIndex={setSelectedPhotoIndex}
        onClose={closeModal}
      />
    </div>
  )
}

export default PhotosBrc
