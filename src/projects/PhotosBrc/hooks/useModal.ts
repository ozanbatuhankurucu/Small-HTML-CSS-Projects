import { useState } from 'react'

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  )

  const openModal = (photoInfoParam: number) => {
    setSelectedPhotoIndex(photoInfoParam)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setSelectedPhotoIndex(null)
  }

  return {
    isOpen,
    selectedPhotoIndex,
    setSelectedPhotoIndex,
    openModal,
    closeModal
  }
}

export default useModal
