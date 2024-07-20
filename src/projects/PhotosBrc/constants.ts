import getRandomSize from './utils/randomSize'

export const PHOTOS = [
  { src: `${process.env.PUBLIC_URL}/brcImages/photo1.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo2.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo3.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo4.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo5.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo6.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo7.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo8.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo9.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo10.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo11.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo12.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo13.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo14.jpg` }
]

export const sizes = PHOTOS.map(() => getRandomSize())
