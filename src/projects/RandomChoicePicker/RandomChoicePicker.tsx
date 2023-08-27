import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { Tag } from './components/Tag'
import { getRandomIndexFromArray } from './util'

const RandomChoicePicker = () => {
  const [input, setInput] = useState<string>('')
  const [choices, setChoices] = useState<string[]>([])
  const [selectedTagIndex, setSelectedTagIndex] = useState<number | null>(null)

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault() // Prevent new line on Enter press
      const formattedChoices = input
        .split(',')
        .map((item) => item.trim())
        .filter((item) => item !== '')

      if (input) {
        setChoices(formattedChoices)
        setInput('')

        const intervalId = setInterval(() => {
          const selectedIndex = getRandomIndexFromArray(formattedChoices)
          setSelectedTagIndex(selectedIndex)
        }, 200)

        setTimeout(() => {
          clearInterval(intervalId) // Stops the interval execution
        }, 3000)
      }

      if (!input) {
        setChoices([])
      }
    }
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#2b88f0]'>
      <div className='text-white font-medium'>
        Enter all of the choices divided by a comma (&apos;,&apos;).
      </div>
      <div className='text-white font-medium'>
        Press enter when you&apos;re done
      </div>
      <textarea
        value={input}
        onChange={handleInputChange}
        className='w-[400px] rounded-sm mt-4 p-2'
        rows={3}
        placeholder='Enter choices here...'
        onKeyDown={handleKeyDown}
      />
      <div className='w-[400px] mt-4 flex flex-wrap gap-2'>
        {choices.map((choice, index) => (
          <Tag
            key={choice}
            choice={choice}
            isSelected={selectedTagIndex === index}
          />
        ))}
      </div>
    </div>
  )
}

export default RandomChoicePicker
