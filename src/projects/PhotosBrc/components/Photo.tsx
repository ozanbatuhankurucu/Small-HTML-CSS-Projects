/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'

interface PhotoProps {
  src: string
  size: string
  onClick: () => void
}

const Photo: React.FC<PhotoProps> = ({ src, size, onClick }) => (
  <img
    src={src}
    className={`rounded-full cursor-pointer ${size}`}
    onClick={onClick}
    alt='brc'
  />
)

export default Photo
