import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AdjustLineWidth } from './AdjustLineWidth'
import ColorPicker from './ColorPicker'

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [history, setHistory] = useState<ImageData[]>([])
  const [lineWidth, setLineWidth] = useState(1)
  const [color, setColor] = useState('#6a5acd')

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
          ctx?.clearRect(0, 0, canvas.width, canvas.height)
        }
      }

      return newHistory // Update the state with the new history
    })
  }

  const resetDrawing = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      setColor('#6a5acd')
      setLineWidth(1)
      setHistory([])
    }
  }, [])

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

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (ctx) {
      ctx.strokeStyle = color
      ctx.lineWidth = lineWidth
    }
  }, [color, lineWidth])

  return (
    <div className='w-[500px]'>
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
        className='border border-steelblue border-b-0 w-full'
      />
      <div className='flex items-center border border-steelblue py-4'>
        <AdjustLineWidth lineWidth={lineWidth} setLineWidth={setLineWidth} />
        <ColorPicker color={color} setColor={setColor} />
        <button
          type='button'
          onClick={resetDrawing}
          className='px-2 py-1 ml-auto mr-2 border border-steelblue text-steelblue font-bold rounded'>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Canvas
