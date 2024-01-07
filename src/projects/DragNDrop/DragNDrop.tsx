import React, { useState } from 'react'
import cx from 'classnames'

const DragNDrop = () => {
  const [boxes, setBoxes] = useState([
    'https://images.unsplash.com/photo-1682685797229-b2930538da47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
    '',
    '',
    '',
    ''
  ])

  const [draggedBoxIndex, setDraggedBoxIndex] = useState<number>(0)
  const [hoveredBox, setHoveredBox] = useState<number | null>(null)

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault()
  }

  const onDragStart = (boxIndex: number) => {
    setDraggedBoxIndex(boxIndex)
  }

  const onDrop = (boxIndex: number) => {
    if (boxIndex !== draggedBoxIndex) {
      setBoxes((prev) => {
        const temp = [...prev]
        temp[boxIndex] = temp[draggedBoxIndex]
        temp[draggedBoxIndex] = ''
        return temp
      })
    }
  }

  const onDragEnter = (boxIndex: number) => {
    setHoveredBox(boxIndex)
  }

  const boxesView = boxes.map((imgSrc, index) => (
    <div
      key={index}
      className={cx('bg-white border-[2px] border-black w-24 h-24', {
        '!bg-black !border-dashed !border-white':
          hoveredBox === index && hoveredBox !== draggedBoxIndex
      })}
      onDragOver={onDragOver}
      onDrop={() => onDrop(index)}
      onDragEnter={() => onDragEnter(index)}>
      {imgSrc && (
        <div
          className='h-full w-full'
          draggable
          onDragStart={() => onDragStart(index)}>
          <img
            className='h-full w-full object-cover'
            src={imgSrc}
            alt='box-img'
          />
        </div>
      )}
    </div>
  ))

  return (
    <div className='h-screen w-full flex justify-center items-center bg-steelblue text-black'>
      <div className='flex gap-4'>{boxesView}</div>
    </div>
  )
}

export default DragNDrop
