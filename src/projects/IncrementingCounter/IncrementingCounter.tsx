import { FacebookLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react'
import { Incrementer } from './components/Incrementer'

const IncrementingCounter = () => (
  <div className='bg-[#8e44ad] h-screen overflow-auto flex items-center justify-center'>
    <div className='flex gap-32'>
      <Incrementer
        followersCount={12000}
        icon={<TwitterLogo className='text-white' size={50} weight='fill' />}
        label='Twitter Followers'
      />
      <Incrementer
        followersCount={5000}
        icon={<YoutubeLogo className='text-white' size={50} weight='fill' />}
        label='YouTube Subscribers'
      />
      <Incrementer
        followersCount={7500}
        icon={<FacebookLogo className='text-white' size={50} weight='fill' />}
        label='Facebook Fans'
      />
    </div>
  </div>
)
export default IncrementingCounter
