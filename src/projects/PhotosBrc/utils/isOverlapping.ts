import { PhotoType } from '../types'

const isOverlapping = (
  newPhoto: PhotoType,
  photosParam: PhotoType[]
): boolean =>
  photosParam.some((photo) => {
    const dx = photo.x + photo.size / 2 - (newPhoto.x + newPhoto.size / 2)
    const dy = photo.y + photo.size / 2 - (newPhoto.y + newPhoto.size / 2)
    const distance = Math.sqrt(dx * dx + dy * dy)
    return distance < photo.size / 2 + newPhoto.size / 2
  })

export default isOverlapping
