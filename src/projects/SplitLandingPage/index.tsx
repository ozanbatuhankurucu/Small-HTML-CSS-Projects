import React from 'react'
import { Helmet } from 'react-helmet'
import SplitLandingPage from './SplitLandingPage'

function Wrapper() {
  return (
    <div className='h-screen flex justify-center items-center '>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Split Landing Page</title>
      </Helmet>
      <SplitLandingPage />
    </div>
  )
}
export default Wrapper
