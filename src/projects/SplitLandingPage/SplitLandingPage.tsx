import React, { useEffect } from 'react'

function SplitLandingPage() {
  useEffect(() => {
    const leftSide = document.getElementById('left-side')
    const rightSide = document.getElementById('right-side')
    leftSide?.addEventListener('mouseover', () => {
      leftSide?.classList.add('!w-3/4')
      rightSide?.classList.add('!w-1/4')
    })
    leftSide?.addEventListener('mouseleave', () => {
      leftSide?.classList.remove('!w-3/4')
      rightSide?.classList.remove('!w-1/4')
    })
    rightSide?.addEventListener('mouseover', () => {
      leftSide?.classList.add('!w-1/4')
      rightSide?.classList.add('!w-3/4')
    })
    rightSide?.addEventListener('mouseleave', () => {
      leftSide?.classList.remove('!w-1/4')
      rightSide?.classList.remove('!w-3/4')
    })
  }, [])

  return (
    <div className='relative w-full h-full bg-[#333]'>
      <div
        id='left-side'
        className='before:content-[""] before:absolute before:w-full before:h-full before:bg-left-bg-color absolute left-0 w-1/2 h-full overflow-hidden bg-[url("/src/assets/images/ps.jpeg")] bg-no-repeat bg-cover transition-all'>
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
        className='before:content-[""] before:absolute before:w-full before:h-full before:bg-right-bg-color absolute right-0 w-1/2 h-full overflow-hidden bg-[url("/src/assets/images/xbox.jpeg")] bg-no-repeat bg-cover transition-all'>
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
