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
  { src: `${process.env.PUBLIC_URL}/brcImages/photo17.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo18.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo19.jpeg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo20.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo21.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo22.jpg` },
  {
    src: `${process.env.PUBLIC_URL}/brcImages/photo23.jpg`,
    useGrowShrink: true,
    shape: 'heart'
  },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo24.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo25.jpg` },
  {
    src: `${process.env.PUBLIC_URL}/brcImages/photo26.jpg`,
    useGrowShrink: true,
    shape: 'heart'
  },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo27.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo28.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo29.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo30.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo31.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo32.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo33.jpg` },
  {
    src: `${process.env.PUBLIC_URL}/brcImages/photo34.jpg`,
    useGrowShrink: true,
    shape: 'heart'
  },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo35.jpg` },
  { src: `${process.env.PUBLIC_URL}/brcImages/photo36.jpg` }
]

export const generatedPhotos = generatePhotos()
