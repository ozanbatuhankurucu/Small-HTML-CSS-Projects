import { PhotoType } from '../types'

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

export default isOverlapping
