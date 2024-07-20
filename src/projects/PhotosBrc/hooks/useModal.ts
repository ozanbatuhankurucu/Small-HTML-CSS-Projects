import { useState } from 'react'

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoSrc, setPhotoSrc] = useState<string | null>(null)

  const openModal = (src: string) => {
    setPhotoSrc(src)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setPhotoSrc(null)
  }

  return { isOpen, photoSrc, openModal, closeModal }
}

export default useModal
