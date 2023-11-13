import AnalogClock from './components/AnalogClock'
import { Time } from './components/Time'

const ThemeClock = () => (
  <div className='flex items-center justify-center h-screen'>
    <div className='flex flex-col items-center'>
      <AnalogClock />
      <Time />
    </div>
  </div>
)

export default ThemeClock
