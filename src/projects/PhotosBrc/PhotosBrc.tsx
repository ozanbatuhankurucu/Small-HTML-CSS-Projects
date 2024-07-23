import React, { useEffect, useState } from 'react'
import Photo from './components/Photo'
import Modal from './components/Modal'
import { PHOTOS } from './constants'
import useModal from './hooks/useModal'
import generateRandomSize from './utils/randomSize'

interface PhotoType {
  id: number
  src: string
  x: number
  y: number
  size: number
}

const PhotosBrc = () => {
  const { isOpen, photoSrc, openModal, closeModal } = useModal()

  const [photos, setPhotos] = useState<PhotoType[]>([])

  const generateRandomPosition = (size: number): { x: number; y: number } => {
    const x = Math.floor(Math.random() * (window.innerWidth - size))
    const y = Math.floor(Math.random() * (window.innerHeight - size))
    return { x, y }
  }

  const isOverlapping = (
    newPhoto: PhotoType,
    photosParam: PhotoType[]
  ): boolean =>
    photosParam.some((photo) => {
      const dx = photo.x - newPhoto.x
      const dy = photo.y - newPhoto.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      return distance < photo.size / 2 + newPhoto.size / 2
    })

  const generatePhotos = () => {
    const newPhotos: PhotoType[] = []
    while (newPhotos.length < PHOTOS.length) {
      const size = generateRandomSize()
      const { x, y } = generateRandomPosition(size)
      const newPhoto = {
        id: newPhotos.length,
        src: PHOTOS[newPhotos.length % PHOTOS.length].src,
        x,
        y,
        size
      }
      if (!isOverlapping(newPhoto, newPhotos)) {
        newPhotos.push(newPhoto)
      }
    }
    setPhotos(newPhotos)
  }

  useEffect(() => {
    generatePhotos()
  }, [])

  return (
    <div className='w-screen h-screen'>
      {photos.map((photo, index) => (
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
        />
      ))}
      <Modal isOpen={isOpen} src={photoSrc} onClose={closeModal} />
    </div>
  )
}

export default PhotosBrc
