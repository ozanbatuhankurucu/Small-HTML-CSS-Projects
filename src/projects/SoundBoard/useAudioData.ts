import React, { RefObject, useEffect } from 'react'
import { SoundRefType } from './types'

const useAudioData = (
  playState: [boolean, React.Dispatch<React.SetStateAction<boolean>>],
  soundRefs: Array<SoundRefType>,
  soundRef: RefObject<HTMLAudioElement>
) => {
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

  return { toggle }
}
export default useAudioData
