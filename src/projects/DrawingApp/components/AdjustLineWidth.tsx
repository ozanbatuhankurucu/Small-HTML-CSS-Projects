import { FC } from 'react'

interface AdjustLineWidthProps {
  lineWidth: number
  setLineWidth: React.Dispatch<React.SetStateAction<number>>
}

export const AdjustLineWidth: FC<AdjustLineWidthProps> = ({
  lineWidth,
  setLineWidth
}) => {
  const adjustLineWidth = (adjustment: number) => {
    setLineWidth((prevWidth) => Math.max(1, prevWidth + adjustment))
  }

  return (
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
  )
}
