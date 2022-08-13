import { useState } from 'react'
import Percentage from './Percentage'
import scale from './utils'

function BlurryLoading() {
  const [percentage, setPercentage] = useState<number>(0)
  const blurPercentage = scale(percentage, 0, 100, 64, 0)
  return (
    <>
      <img
        style={{
          filter: `blur(${blurPercentage}px)`
        }}
        className='w-full h-full object-cover'
        src='https://images.unsplash.com/photo-1654897375804-3bea2fb7a0aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
        alt='simone-daino'
      />
      {percentage < 100 && (
        <Percentage percentage={percentage} setPercentage={setPercentage} />
      )}
    </>
  )
}

export default BlurryLoading
