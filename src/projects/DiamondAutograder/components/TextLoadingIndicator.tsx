import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const texts = [
  'AI is working...',
  'AI is inspecting each view of the diamond...',
  'AI is incorporating what it has learned from HK expert diamond graders...'
]

const bounceRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const Text = styled.p`
  animation: ${bounceRight} 150ms ease-in;
`
export const TextLoadingIndicator = () => {
  const [currentText, setCurrentText] = useState(texts[0])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex === texts.length - 1 ? 0 : currentIndex + 1)
      setCurrentText(texts[currentIndex])
    }, 1500)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <Text className='text-xs font-normal text-[#B1B5C1]'>{currentText}</Text>
  )
}
