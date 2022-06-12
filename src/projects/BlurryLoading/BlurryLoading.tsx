import { useState } from 'react'
import { Helmet } from 'react-helmet'
import Percentage from './Percentage'

function BlurryLoading() {
  const [percentage, setPercentage] = useState<number>(0)
  return (
    <div>
      <Helmet>
        <title>Blurry Loading</title>
      </Helmet>
      <div className='flex justify-center items-center h-screen w-screen bg-black'>
        <img
          style={{
            filter: `blur(${100 - percentage}px)`
          }}
          className='w-full h-full object-cover'
          src='https://images.unsplash.com/photo-1654897375804-3bea2fb7a0aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
          alt='simone-daino'
        />
        {percentage <= 100 && (
          <Percentage percentage={percentage} setPercentage={setPercentage} />
        )}
      </div>
    </div>
  )
}

export default BlurryLoading
