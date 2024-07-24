/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import styled, { keyframes, css } from 'styled-components'

interface PhotoProps {
  src: string
  onClick: () => void
  style?: React.CSSProperties
  animate?: boolean
}

const growShrink = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1); /* Adjust the scale factor as needed */
  }
`

const StyledImg = styled.img<{ animate: boolean }>`
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  width: 100%;
  height: 100%;
  ${({ animate }) =>
    animate &&
    css`
      animation: ${growShrink} 2s infinite; /* Adjust the duration as needed */
    `}
`

const Photo: React.FC<PhotoProps> = ({
  src,
  style,
  onClick,
  animate = false
}) => (
  <div style={style}>
    <StyledImg src={src} onClick={onClick} alt='brc' animate={animate} />
  </div>
)

export default Photo
