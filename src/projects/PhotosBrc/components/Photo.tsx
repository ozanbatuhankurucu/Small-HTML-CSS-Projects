/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'

interface PhotoProps {
  src: string
  onClick: () => void
  style?: React.CSSProperties
}

const Photo: React.FC<PhotoProps> = ({ src, style, onClick }) => (
  <div style={style}>
    <img
      src={src}
      className='rounded-full cursor-pointer object-cover w-full h-full'
      onClick={onClick}
      alt='brc'
    />
  </div>
)

export default Photo
