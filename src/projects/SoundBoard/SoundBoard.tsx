import { useRef, useState } from 'react'
import sounds from './constants'
import SoundBox from './SoundBox'

const SoundBoard = () => {
  const soundRefs = sounds.map(({ soundName, audioFile }) => ({
    soundName,
    audioFile,
    ref: useRef<HTMLAudioElement>(null),
    playState: useState<boolean>(false)
  }))

  return (
    <div className='flex gap-5'>
      {soundRefs.map(({ soundName, audioFile, ref, playState }) => (
        <SoundBox
          key={soundName}
          playState={playState}
          audioFile={audioFile}
          soundRef={ref}
          soundRefs={soundRefs}>
          {soundName}
        </SoundBox>
      ))}
    </div>
  )
}

export default SoundBoard
