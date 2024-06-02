import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotateA = keyframes`
  0%, 25% {
    transform: rotate(0deg);
  }
  50%, 75% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const rotateB = keyframes`
  0%, 25% {
    transform: rotate(90deg);
  }
  50%, 75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(450deg);
  }
`

const LoaderContainer = styled.div`
  position: relative;
  height: 80px;
  width: 80px;
`

const Triangle = styled.div<{ delay: string }>`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border: 50px solid transparent;
  border-bottom-color: #fff;
  animation: ${rotateA} 2s linear infinite;
  animation-delay: ${({ delay }) => delay};

  &:nth-child(2) {
    transform: rotate(90deg);
    animation: ${rotateB} 2s linear infinite;
  }
`

const Loader: React.FC = () => (
  <LoaderContainer>
    <Triangle delay='0.5s' />
    <Triangle delay='0s' />
  </LoaderContainer>
)

export default Loader
