import { useRef, useState } from 'react'
import { Applause, Boo, Gasp, Tada, Victory, Wrong } from '../../sounds'

const sounds = [
  { soundName: 'applause', audioFile: Applause },
  { soundName: 'boo', audioFile: Boo },
  { soundName: 'gasp', audioFile: Gasp },
  { soundName: 'tada', audioFile: Tada },
  { soundName: 'victory', audioFile: Victory },
  { soundName: 'wrong', audioFile: Wrong }
]

export default sounds
