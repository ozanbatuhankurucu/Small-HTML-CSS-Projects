import { PHOTOS } from '../constants'
import { PhotoType } from '../types'
import generateRandomPosition from './generateRandomPosition'
import isOverlapping from './isOverlapping'
import generateRandomSize from './randomSize'

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

  return newPhotos
}
export default generatePhotos
