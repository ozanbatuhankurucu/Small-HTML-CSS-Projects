import React from 'react'
import { AppleLogo, FacebookLogo, GoogleLogo } from 'phosphor-react'
import SocialLoginBtn from './SocialLoginBtn'

const SocialLogins = () => (
  <div>
    <div className='text-sm flex items-center gap-2 justify-center font-medium mt-6'>
      <hr className='w-3 h-[2px] bg-black cursor-pointer' /> Or Sign in with
      <hr className='w-3 h-[2px] bg-black' />
    </div>
    <div className='flex gap-2 mt-5'>
      <SocialLoginBtn
        className='flex-1'
        icon={<GoogleLogo className='text-black' weight='bold' size={28} />}
        iconText='Google'
      />
      <SocialLoginBtn
        className='flex-1'
        icon={<AppleLogo className='text-black' weight='fill' size={28} />}
        iconText='Apple ID'
      />
      <SocialLoginBtn
        className='flex-1'
        icon={<FacebookLogo className='text-black' weight='fill' size={28} />}
        iconText='Facebook'
      />
    </div>
  </div>
)

export default SocialLogins
