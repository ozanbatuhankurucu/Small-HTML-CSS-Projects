import React, { useEffect, useRef, useState } from 'react'

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  // States for undo functionality
  const [history, setHistory] = useState<ImageData[]>([])

  const startDrawing = ({ nativeEvent }: React.MouseEvent) => {
    const { offsetX, offsetY } = nativeEvent
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) {
      ctx.beginPath()
      ctx.moveTo(offsetX, offsetY)
      setIsDrawing(true)
    }
  }

  const draw = ({ nativeEvent }: React.MouseEvent) => {
    if (!isDrawing) return
    const { offsetX, offsetY } = nativeEvent
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) {
      ctx.lineTo(offsetX, offsetY)
      ctx.stroke()
    }
  }

  const stopDrawing = () => {
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) {
      ctx.closePath()
      setIsDrawing(false)
    }
  }

  const saveState = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas && ctx) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      setHistory([...history, imageData])
    }
  }

  const undoLastDrawing = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    setHistory((prevHistory) => {
      if (prevHistory.length === 0) return prevHistory // Return early if history is empty

      // Create a new array without the last item
      const newHistory = prevHistory.slice(0, -1)

      // Optionally restore the canvas state here if needed
      if (canvas && ctx) {
        if (newHistory.length > 0) {
          const previousState = newHistory[newHistory.length - 1]
          ctx?.putImageData(previousState, 0, 0)
        } else {
          // Clear canvas if no history
          const canvas = canvasRef.current
          const ctx = canvas?.getContext('2d')
          ctx?.clearRect(0, 0, canvas.width, canvas.height)
        }
      }

      return newHistory // Update the state with the new history
    })
  }

  useEffect(() => {
    const handleUndo = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'z') {
        undoLastDrawing()
      }
    }

    window.addEventListener('keydown', handleUndo)

    return () => {
      window.removeEventListener('keydown', handleUndo)
    }
  }, [undoLastDrawing])

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={() => {
        stopDrawing()
        saveState()
      }}
      onMouseMove={draw}
      width={500}
      height={500}
      className='border border-steelblue'
    />
  )
}

export default Canvas
