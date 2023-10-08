import { FC, ReactNode, useEffect, useState } from 'react'

interface IncrementerProps {
  icon: ReactNode
  label: string
  followersCount: number
}
export const Incrementer: FC<IncrementerProps> = ({
  icon,
  label,
  followersCount
}) => {
  const [followersCountState, setFollowersCountState] = useState(0)

  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (followersCountState < followersCount) {
        const increment = Math.ceil(followersCount / 150)
        setFollowersCountState((prevCount) => prevCount + increment)
      } else {
        setFollowersCountState(followersCount)
        clearInterval(animationInterval)
      }
    }, 10)

    return () => clearInterval(animationInterval)
  }, [followersCount, followersCountState])

  return (
    <div className='flex flex-col items-center gap-2 text-white min-w-[200px]'>
      <div>{icon}</div>
      <div className='text-[60px]'>{followersCountState}</div>
      <div className='text-base'>{label}</div>
    </div>
  )
}
