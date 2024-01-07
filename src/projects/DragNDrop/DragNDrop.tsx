import _ from 'lodash'
import React, { useState } from 'react'
import styled from 'styled-components'

const Box = styled.div`
  width: 200px;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  background-color: #f0f0f0;
`

const DragNDrop = () => {
  const [boxes, setBoxes] = useState<Record<string, string[]>>({
    box_1: ['Item 1', 'Item 2', 'Item 3'],
    box_2: ['Item 4', 'Item 5']
  })

  const [draggedItem, setDraggedItem] = useState<string>('')
  const [sourceBox, setSourceBox] = useState<string>('')

  const onDragStart = (item: string, boxId: string) => {
    setDraggedItem(item)
    setSourceBox(boxId)
  }

  const onDragOver = (event: React.DragEvent, boxId: string) => {
    event.preventDefault()
    if (boxId === sourceBox) {
      // Optionally, you can provide visual feedback for invalid drop targets.
      event.dataTransfer.dropEffect = 'none'
    } else {
      event.dataTransfer.dropEffect = 'move'
    }
  }

  const boxesView = _.map(boxes, (items, boxId) => (
    <Box
      key={boxId}
      onDragOver={(e) => onDragOver(e, boxId)}
      onDrop={() => {
        if (boxId !== sourceBox) {
          setBoxes((prev) => ({
            ...prev,
            [sourceBox]: prev[sourceBox].filter((item) => item !== draggedItem),
            [boxId]: [...prev[boxId], draggedItem]
          }))
        }
        setDraggedItem('')
        setSourceBox('')
      }}>
      {items.map((item) => (
        <div key={item} draggable onDragStart={() => onDragStart(item, boxId)}>
          {item}
        </div>
      ))}
    </Box>
  ))

  return (
    <div className='h-screen w-full flex justify-center items-center bg-steelblue text-black'>
      {boxesView}
    </div>
  )
}

export default DragNDrop
