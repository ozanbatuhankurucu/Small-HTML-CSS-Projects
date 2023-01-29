import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'

const animate = keyframes`
  0% {
    transform: scale(1, 1);
    opacity: 1;
  }
  100% {
    transform: scale(0.5, 1);
    opacity: 0.5;
  }
`

const SkeletonWrapper = styled.div`
  width: 100px;
  height: 10px;
  background: #eee;
  border-radius: 5px;
  animation: ${animate} 1s ease-in-out infinite;
`
interface SkeletonLoaderProps {
  className?: string
}
const SkeletonLoader: FC<SkeletonLoaderProps> = ({ className }) => (
  <SkeletonWrapper className={className} />
)

export default SkeletonLoader
