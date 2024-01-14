import { useState } from 'react'

export const useDragNDrop = (initialBoxes: string[]) => {
  const [boxes, setBoxes] = useState(initialBoxes)
  const [draggedBoxIndex, setDraggedBoxIndex] = useState<number>(0)
  const [hoveredBox, setHoveredBox] = useState<number | null>(null)

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

  return {
    boxes,
    onDragStart,
    onDrop,
    onDragEnter,
    hoveredBox,
    draggedBoxIndex
  }
}
