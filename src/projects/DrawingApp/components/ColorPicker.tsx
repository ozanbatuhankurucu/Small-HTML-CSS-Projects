interface ColorPickerProps {
  color: string
  setColor: React.Dispatch<React.SetStateAction<string>>
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, setColor }) => {
  return (
    <div className='flex justify-center w-[80px] bg-white'>
      <input
        type='color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className='w-12 h-8 border-none cursor-pointer'
      />
    </div>
  )
}

export default ColorPicker
