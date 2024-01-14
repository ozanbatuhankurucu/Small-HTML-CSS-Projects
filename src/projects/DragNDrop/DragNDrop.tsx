import React from 'react'
import { useDragNDrop } from './hooks/useDragNDrop'
import { Box } from './components/Box'

const DragNDrop = () => {
  const {
    boxes,
    onDragStart,
    onDrop,
    onDragEnter,
    hoveredBox,
    draggedBoxIndex
  } = useDragNDrop([
    'https://images.unsplash.com/photo-1682685797229-b2930538da47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
    '',
    '',
    '',
    ''
  ])

  return (
    <div className='h-screen w-full flex justify-center items-center bg-steelblue text-black'>
      <div className='flex gap-4'>
        {boxes.map((imgSrc, index) => (
          <Box
            key={index}
            imgSrc={imgSrc}
            index={index}
            onDragOver={(e: React.DragEvent) => e.preventDefault()}
            onDrop={onDrop}
            onDragEnter={onDragEnter}
            onDragStart={onDragStart}
            hoveredBox={hoveredBox}
            draggedBoxIndex={draggedBoxIndex}
          />
        ))}
      </div>
    </div>
  )
}

export default DragNDrop
