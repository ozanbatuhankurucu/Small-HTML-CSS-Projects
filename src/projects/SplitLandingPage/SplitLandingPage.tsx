import React, { useEffect, useRef } from 'react'

function SplitLandingPage() {
  const leftSide = useRef<HTMLDivElement | null>(null)
  const rightSide = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const leftSideElement = leftSide.current
    const rightSideElement = rightSide.current
    const handleLeftSideMouseOver = () => {
      leftSideElement?.classList.add('!w-3/4')
      rightSideElement?.classList.add('!w-1/4')
    }
    const handleLeftSideMouseLeave = () => {
      leftSideElement?.classList.remove('!w-3/4')
      rightSideElement?.classList.remove('!w-1/4')
    }
    const handleRightSideMouseOver = () => {
      leftSideElement?.classList.add('!w-1/4')
      rightSideElement?.classList.add('!w-3/4')
    }
    const handleRightSideMouseLeave = () => {
      leftSideElement?.classList.remove('!w-1/4')
      rightSideElement?.classList.remove('!w-3/4')
    }
    leftSideElement?.addEventListener('mouseover', handleLeftSideMouseOver)
    leftSideElement?.addEventListener('mouseleave', handleLeftSideMouseLeave)
    rightSideElement?.addEventListener('mouseover', handleRightSideMouseOver)
    rightSideElement?.addEventListener('mouseleave', handleRightSideMouseLeave)
    return () => {
      console.log('clean up func')
      leftSideElement?.removeEventListener('mouseover', handleLeftSideMouseOver)
      leftSideElement?.removeEventListener(
        'mouseleave',
        handleLeftSideMouseLeave
      )
      rightSideElement?.removeEventListener(
        'mouseover',
        handleRightSideMouseOver
      )
      rightSideElement?.removeEventListener(
        'mouseleave',
        handleRightSideMouseLeave
      )
    }
  }, [])

  return (
    <div className='relative w-full h-full bg-[#333]'>
      <div
        ref={leftSide}
        id='left-side'
        className='before:content-[""] before:absolute before:w-full before:h-full before:bg-left-bg-color absolute left-0 w-1/2 h-full overflow-hidden bg-ps bg-no-repeat bg-cover transition-all'>
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
        ref={rightSide}
        id='right-side'
        className='before:content-[""] before:absolute before:w-full before:h-full before:bg-right-bg-color absolute right-0 w-1/2 h-full overflow-hidden bg-xbox bg-no-repeat bg-cover transition-all'>
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
