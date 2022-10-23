import React, { useState } from 'react'
import cx from 'classnames'

function SplitLandingPage() {
  const [leftSideMouseOver, setLeftSideMouseOver] = useState(false)
  const [rightSideMouseOver, setRightSideMouseOver] = useState(false)

  return (
    <div className='relative w-full h-full bg-[#333]'>
      <div
        id='left-side'
        className={cx(
          'before:content-[""] before:absolute before:w-full before:h-full before:bg-left-bg-color absolute left-0 w-1/2 h-full overflow-hidden bg-ps bg-no-repeat bg-cover transition-all',
          {
            '!w-3/4': leftSideMouseOver,
            '!w-1/4': rightSideMouseOver
          }
        )}
        onMouseOver={() => setLeftSideMouseOver(true)}
        onMouseLeave={() => setLeftSideMouseOver(false)}>
        <h1 className='text-[4rem] text-white absolute left-1/2 top-[20%] -translate-x-1/2 whitespace-nowrap'>
          Playstation 5
        </h1>
        <a
          className='absolute flex items-center justify-center left-1/2 top-[40%] -translate-x-1/2 text-white border-[0.2rem] border-solid border-white text-base w-60 p-5 font-bold uppercase hover:bg-left-btn-hover-color hover:border-left-btn-hover-color'
          href='https://www.playstation.com/en-tr/'>
          Buy Now
        </a>
      </div>
      <div
        id='right-side'
        className={cx(
          'before:content-[""] before:absolute before:w-full before:h-full before:bg-right-bg-color absolute right-0 w-1/2 h-full overflow-hidden bg-xbox bg-no-repeat bg-cover transition-all',
          {
            '!w-3/4': rightSideMouseOver,
            '!w-1/4': leftSideMouseOver
          }
        )}
        onMouseOver={() => setRightSideMouseOver(true)}
        onMouseLeave={() => setRightSideMouseOver(false)}>
        <h1 className='text-[4rem] text-white absolute left-1/2 top-[20%] -translate-x-1/2 whitespace-nowrap'>
          XBox Series X
        </h1>
        <a
          className='absolute flex items-center justify-center left-1/2 top-[40%] -translate-x-1/2 text-white border-[0.2rem] border-solid border-white text-base w-60 p-5 font-bold uppercase hover:bg-right-btn-hover-color hover:border-right-btn-hover-color'
          href='https://www.xbox.com/en-US/'>
          Buy Now
        </a>
      </div>
    </div>
  )
}

export default SplitLandingPage
