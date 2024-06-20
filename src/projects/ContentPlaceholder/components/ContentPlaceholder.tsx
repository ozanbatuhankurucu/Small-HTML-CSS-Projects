import React from 'react'
import styled, { keyframes } from 'styled-components'
import cx from 'classnames'

// Define shimmer effect animation
const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`

const PlaceholderItem = styled.div<{
  height: string
  width: string
  shape?: 'rect' | 'circle'
}>`
  background: linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%);
  background-size: 800px 104px;
  animation: ${shimmer} 1.2s infinite linear;
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '4px')};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`

export interface Item {
  height: string
  width: string
  shape?: 'rect' | 'circle'
}

interface ContentPlaceholderProps {
  items: Item[]
  placeholderWrapperClassName?: string
}

const ContentPlaceholder: React.FC<ContentPlaceholderProps> = ({
  items,
  placeholderWrapperClassName
}) => (
  <div className={cx('flex flex-col gap-4', placeholderWrapperClassName)}>
    {items.map(({ height, width, shape }, index) => (
      <PlaceholderItem
        key={index}
        height={height}
        width={width}
        shape={shape || 'rect'}
      />
    ))}
  </div>
)

export default ContentPlaceholder
