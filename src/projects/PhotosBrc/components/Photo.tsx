/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'

interface PhotoProps {
  src: string
  size: string
  onClick: () => void
}

const Photo: React.FC<PhotoProps> = ({ src, size, onClick }) => (
  <div className={`${size}`}>
    <img
      src={src}
      className='rounded-full cursor-pointer object-cover w-full h-full'
      onClick={onClick}
      alt='brc'
    />
  </div>
)

export default Photo
