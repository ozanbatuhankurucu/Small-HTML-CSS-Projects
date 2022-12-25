import { RefObject } from 'react'

export interface SoundRefType {
  soundName: string
  audioFile: string
  playState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  ref: RefObject<HTMLAudioElement>
}
