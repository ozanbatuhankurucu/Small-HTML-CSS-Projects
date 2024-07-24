import generatePhotos from './utils/generatePhotos'

export const PHOTOS = [
  {
    src: `${process.env.PUBLIC_URL}/brcImages/photo1.jpg`,
    useGrowShrink: true,
    shape: 'heart'
  },
  {
    src: `${process.env.PUBLIC_URL}/brcImages/photo2.jpg`,
    useGrowShrink: true,
    shape: 'heart'
  },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo3.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo4.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo5.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo6.jpg` },
  {
    src: `${process.env.PUBLIC_URL}/brcImages/photo7.jpg`,
    useGrowShrink: true,
    shape: 'heart'
  },
  {
    src: `${process.env.PUBLIC_URL}/brcImages/photo8.jpg`,
    useGrowShrink: true,
    shape: 'heart'
  },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo9.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo10.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo11.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo12.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo13.jpg` },
  {
    src: `${process.env.PUBLIC_URL}/brcImages/photo14.jpg`,
    useGrowShrink: true,
    shape: 'heart'
  },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo15.jpg` },
  {
    src: `${process.env.PUBLIC_URL}/brcImages/photo16.jpg`,
    useGrowShrink: true,
    shape: 'heart'
  },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo17.jpg` }
]

export const generatedPhotos = generatePhotos()
