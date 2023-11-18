import { useEffect, useState } from 'react'
import AnalogClock from './components/AnalogClock'
import { Time } from './components/Time'

const ThemeClock = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const className = 'dark'
    const element = window.document.documentElement
    if (darkMode) {
      element.classList.add(className)
    } else {
      element.classList.remove(className)
    }
  }, [darkMode])

  return (
    <div className='flex justify-center h-screen dark:bg-black'>
      <div className='flex flex-col items-center'>
        <button
          type='button'
          className='px-2 py-1 rounded-md mt-32 bg-black text-white outline-none dark:bg-white dark:text-black'
          onClick={() => setDarkMode((prev) => !prev)}>
          Dark mode
        </button>
        <AnalogClock />
        <Time />
      </div>
    </div>
  )
}

export default ThemeClock
