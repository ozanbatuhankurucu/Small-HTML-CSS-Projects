import React from 'react'
import styled, { keyframes } from 'styled-components'
import cx from 'classnames'

// Define shimmer effect animation
const shimmer = keyframes`
 0%, 100% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
`

type Shape = 'rect' | 'circle'

const PlaceholderItem = styled.div<{
  height: string
  width: string
  shape?: Shape
  color?: string
}>`
  background-color: ${({ color }) => color};
  background-size: 800px 104px;
  animation: ${shimmer} 1.2s infinite linear;
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '4px')};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`

export interface Item {
  height: string
  width: string
  shape?: Shape
  className?: string
  color?: string
}

interface ContentPlaceholderProps {
  items: Item[]
  placeholderWrapperClassName?: string
}

const ContentPlaceholder: React.FC<ContentPlaceholderProps> = ({
  items,
  placeholderWrapperClassName
}) => (
  <div className={cx('flex flex-col', placeholderWrapperClassName)}>
    {items.map(({ height, width, shape, color, className }, index) => (
      <PlaceholderItem
        key={index}
        className={className}
        height={height}
        width={width}
        shape={shape || 'rect'}
        color={color || '#dee2e6'}
      />
    ))}
  </div>
)

export default ContentPlaceholder
