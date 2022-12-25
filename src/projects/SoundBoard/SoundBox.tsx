import React, { FC, ReactNode, RefObject, useEffect } from 'react'

interface SoundBoxProps {
  children?: ReactNode
  playState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  audioFile: string
  soundRef: RefObject<HTMLAudioElement>
  soundRefs: Array<{
    soundName: string
    audioFile: string
    playState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    ref: RefObject<HTMLAudioElement>
  }>
}
const SoundBox: FC<SoundBoxProps> = ({
  children,
  audioFile,
  soundRef,
  soundRefs,
  playState
}) => {
  const [playing, setPlaying] = playState
  const toggle = () => setPlaying(!playing)

  const resetOtherSounds = () => {
    soundRefs.forEach(({ ref, playState: refPlayState }) => {
      if (ref && ref.current) {
        if (ref.current !== soundRef.current) {
          const [, setRefPlayState] = refPlayState
          ref.current.pause()
          ref.current.currentTime = 0
          setRefPlayState(false)
        }
      }
    })
  }

  useEffect(() => {
    if (soundRef && soundRef.current) {
      if (playing) {
        resetOtherSounds()
        soundRef.current.play()
      }

      if (!playing) {
        soundRef.current.pause()
      }
    }
  }, [playing])

  useEffect(() => {
    if (soundRef && soundRef.current) {
      soundRef.current.addEventListener('ended', () => {
        setPlaying(false)
      })
    }
    return () => {
      if (soundRef && soundRef.current) {
        soundRef.current.removeEventListener('ended', () => setPlaying(false))
      }
    }
  }, [])

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
