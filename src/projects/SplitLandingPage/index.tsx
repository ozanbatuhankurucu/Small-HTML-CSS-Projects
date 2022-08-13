import React from 'react'
import { Helmet } from 'react-helmet'

function Wrapper() {
  return (
    <div className='h-screen flex justify-center items-center '>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Split Landing Page</title>
      </Helmet>
    </div>
  )
}
export default Wrapper
