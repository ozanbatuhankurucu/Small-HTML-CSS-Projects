import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Clock = styled.div`
  margin-top: 100px;
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 50%;
`

const Hand = styled.div<{ rotation: number }>`
  width: 2px;
  position: absolute;
  bottom: 50%;
  left: 50%;
  background: black;
  transform-origin: bottom;
  transform: rotate(${(props) => props.rotation}deg);
  transition: transform 0.5s cubic-bezier(0.4, 2.3, 0.3, 1);
`

const HourHand = styled(Hand)`
  height: 50px;
`

const MinuteHand = styled(Hand)`
  height: 70px;
`

const SecondHand = styled(Hand)`
  height: 90px;
  background: red;
`

const CenterPoint = styled.div`
  position: absolute;
  background: black;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const AnalogClock: React.FC = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000)

    function tick() {
      setTime(new Date())
    }

    return function cleanup() {
      clearInterval(timerID)
    }
  }, [])

  const hoursRotation = time.getHours() * 30 + time.getMinutes() * 0.5
  const minutesRotation = time.getMinutes() * 6
  const secondsRotation = time.getSeconds() * 6

  return (
    <Clock>
      <HourHand className='dark:bg-white' rotation={hoursRotation} />
      <MinuteHand className='dark:bg-white' rotation={minutesRotation} />
      <SecondHand rotation={secondsRotation} />
      <CenterPoint className='dark:bg-white dark:border dark:border-red-500' />
    </Clock>
  )
}

export default AnalogClock
