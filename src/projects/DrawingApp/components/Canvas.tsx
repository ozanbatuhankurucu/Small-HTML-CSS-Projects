import React, { useEffect, useRef, useState } from 'react'

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [history, setHistory] = useState<ImageData[]>([])
  const [lineWidth, setLineWidth] = useState(5)

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

  const adjustLineWidth = (adjustment: number) => {
    setLineWidth((prevWidth) => Math.max(1, prevWidth + adjustment))
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

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (ctx) {
      ctx.lineWidth = lineWidth
    }
  }, [lineWidth])

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
        <div className='flex items-center gap-3 justify-center ml-2'>
          <button
            onClick={() => adjustLineWidth(-3)}
            className='flex items-center justify-center h-8 w-8 bg-blue-500 text-white font-bold rounded'>
            -
          </button>
          <div className='flex items-center justify-center rounded text-black font-medium border border-steelblue h-8 w-8'>
            {lineWidth}
          </div>
          <button
            onClick={() => adjustLineWidth(3)}
            className='flex items-center justify-center h-8 w-8 bg-blue-500 text-white font-bold rounded'>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Canvas
