/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import styled, { keyframes, css } from 'styled-components'

interface PhotoProps {
  src: string
  onClick: () => void
  style?: React.CSSProperties
  animate?: boolean
  shape?: 'circle' | 'heart'
}

const growShrink = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1); /* Adjust the scale factor as needed */
  }
`

const StyledCircleImg = styled.img<{ animate: boolean }>`
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

const HeartShape = styled.div<{ src: string; animate: boolean }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: 90%;
  clip-path: url(#heart-clip);
  cursor: pointer;
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
  animate = false,
  shape = 'circle'
}) => (
  <div style={style}>
    {shape === 'circle' && (
      <StyledCircleImg
        src={src}
        onClick={onClick}
        alt='brc'
        animate={animate}
      />
    )}
    {shape === 'heart' && (
      <>
        <svg width='0' height='0'>
          <defs>
            <clipPath id='heart-clip' clipPathUnits='objectBoundingBox'>
              <path d='M0.5,0.875 L0.44,0.82 C0.3,0.68 0.125,0.52 0.125,0.31 C0.125,0.15 0.25,0 0.375,0 C0.455,0 0.5,0.065 0.5,0.065 C0.5,0.065 0.545,0 0.625,0 C0.75,0 0.875,0.15 0.875,0.31 C0.875,0.52 0.7,0.68 0.56,0.82 L0.5,0.875 Z' />
            </clipPath>
          </defs>
        </svg>
        <HeartShape src={src} onClick={onClick} animate={animate} />
      </>
    )}
  </div>
)

export default Photo
