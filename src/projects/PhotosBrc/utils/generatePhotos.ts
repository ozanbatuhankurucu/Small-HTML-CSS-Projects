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
    const currentPhotoData = PHOTOS[newPhotos.length % PHOTOS.length]
    const newPhoto: PhotoType = {
      id: newPhotos.length,
      src: currentPhotoData.src,
      useGrowShrink: currentPhotoData.useGrowShrink,
      shape: currentPhotoData.shape as PhotoType['shape'],
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
