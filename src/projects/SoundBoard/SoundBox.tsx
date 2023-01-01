import React, { FC, ReactNode, RefObject } from 'react'
import { SoundRefType } from './types'
import useAudioData from './useAudioData'

interface SoundBoxProps {
  children?: ReactNode
  playState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  audioFile: string
  soundRef: RefObject<HTMLAudioElement>
  soundRefs: Array<SoundRefType>
}
const SoundBox: FC<SoundBoxProps> = ({
  children,
  audioFile,
  soundRef,
  soundRefs,
  playState
}) => {
  const { toggle } = useAudioData(playState, soundRefs, soundRef)
  return (
    <button type='button' onClick={toggle}>
      <div className='flex items-center justify-center rounded text-white font-bold w-24 h-12 bg-sound-box-card-bg-color'>
        {children}
      </div>
      <audio src={audioFile} ref={soundRef} />
    </button>
  )
}

export default SoundBox
