import React, { FC, MouseEvent, useState } from 'react'
import styled, { keyframes } from 'styled-components'

// Ripple Animation using keyframes
const rippleAnimation = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`

const RippleButton = styled.button`
  position: relative;
  overflow: hidden;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
  }

  // Ripple element
  .ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ${rippleAnimation} 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }
`

interface Ripple {
  left: number
  top: number
  size: number
}

export const Button: FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget
    const rect = button.getBoundingClientRect()

    const newRipple: Ripple = {
      left: event.clientX - rect.left,
      top: event.clientY - rect.top,
      size: Math.max(rect.width, rect.height)
    }

    setRipples((currentRipples) => [...currentRipples, newRipple])

    // Set a timeout to remove the ripple after the animation ends
    setTimeout(() => {
      setRipples((currentRipples) => currentRipples.filter((_, i) => i !== 0))
    }, 600) // 600ms is the duration of the rippleAnimation
  }

  return (
    <RippleButton className='bg-purple-700' onClick={createRipple}>
      Click me
      {ripples.map((ripple, index) => (
        <span
          key={index}
          className='ripple'
          style={{
            left: ripple.left - ripple.size / 2,
            top: ripple.top - ripple.size / 2,
            width: ripple.size,
            height: ripple.size
          }}
        />
      ))}
    </RippleButton>
  )
}
