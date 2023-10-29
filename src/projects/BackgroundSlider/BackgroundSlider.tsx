import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { IMAGES } from './constants'

const DivWithOverlay = styled.div<{
  image: string
}>`
  background-image: ${(props) => `url(${props.image})`};
  background-position: center center;
  background-size: cover;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

const BackgroundSlider = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const selectedImage = IMAGES[selectedImageIndex]
  return (
    <DivWithOverlay
      image={selectedImage}
      className='h-screen w-screen flex justify-center items-center transition-all'>
      <div className='h-[70vh] w-[70vw] overflow-hidden relative'>
        <div
          style={{
            backgroundImage: `url(${selectedImage})`
          }}
          className='h-screen w-screen -top-[15vh] -left-[15vw] absolute bg-cover bg-center'
        />
        <button
          type='button'
          onClick={() =>
            setSelectedImageIndex((prev) => {
              if (prev === 0) return IMAGES.length - 1
              return prev - 1
            })
          }>
          <div
            style={{
              left: 'calc(15vw - 86px)'
            }}
            className='fixed z-10 top-1/2 -translate-y-1/2 p-8 border-[2px] border-[#ffa500] border-r-[0px]'>
            <ArrowLeft size={20} className='text-white' />
          </div>
        </button>
        <button
          type='button'
          onClick={() =>
            setSelectedImageIndex((prev) => {
              if (prev === IMAGES.length - 1) return 0
              return prev + 1
            })
          }>
          <div
            style={{
              right: 'calc(15vw - 86px)'
            }}
            className='fixed z-10 top-1/2 -translate-y-1/2 p-8 border-[2px] border-[#ffa500] border-l-[0px]'>
            <ArrowRight size={20} className='text-white' />
          </div>
        </button>
      </div>
    </DivWithOverlay>
  )
}

export default BackgroundSlider
