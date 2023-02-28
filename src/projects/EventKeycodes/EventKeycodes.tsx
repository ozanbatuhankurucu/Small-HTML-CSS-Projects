import React, { useEffect, useState } from 'react'
import Wrapper from './StyledComponents/Wrapper'
import EventBox from './components/EventBox'
import { KeyPressItem } from './types'
import EventBoxTitle from './components/EventBoxTitle'

const EventKeycodes = () => {
  const [keyPressItem, setKeyPressItem] = useState<KeyPressItem>()
  const { pressedKey, pressedKeyCode, pressedCode } = keyPressItem || {}

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      const { code, keyCode, key } = event
      setKeyPressItem({
        pressedCode: code,
        pressedKey: key,
        pressedKeyCode: keyCode
      })
    }

    document.addEventListener('keypress', handleKeyPress)

    return () => {
      document.removeEventListener('keypress', handleKeyPress)
    }
  }, [])

  return (
    <div className='h-screen flex items-center justify-center bg-[#e1e1e1]'>
      {!keyPressItem && (
        <Wrapper className='p-5 border border-[#999] text-xl min-w-[150px] font-bold bg-[#eee]'>
          Press any key to get the keyCode
        </Wrapper>
      )}
      {keyPressItem && (
        <div className='flex gap-4 items-center'>
          <EventBox title={<EventBoxTitle>event.key</EventBoxTitle>}>
            {pressedKey === ' ' ? 'Space' : pressedKey}
          </EventBox>
          <EventBox title={<EventBoxTitle>event.keyCode </EventBoxTitle>}>
            {pressedKeyCode}
          </EventBox>
          <EventBox title={<EventBoxTitle> event.code</EventBoxTitle>}>
            {pressedCode}
          </EventBox>
        </div>
      )}
    </div>
  )
}

export default EventKeycodes
