import React from 'react'
import { Helmet } from 'react-helmet'
import ScrollAnimation from './ScrollAnimation'

function Wrapper() {
  return (
    <>
      <Helmet>
        <title>Scroll Animation</title>
      </Helmet>
      <div className='pt-2 bg-[#ECE7D1] flex flex-col items-center justify-center'>
        <ScrollAnimation />
      </div>
    </>
  )
}

export default Wrapper
