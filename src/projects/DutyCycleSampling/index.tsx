import React from 'react'
import { Helmet } from 'react-helmet'
import { Outlet } from 'react-router-dom'

const Wrapper = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Duty Cycle Scaling</title>
      </Helmet>
      <div
        style={{
          background: 'linear-gradient(112.87deg, #192736 0%, #18101D 100%)'
        }}
        className='h-screen text-white'>
        <Outlet />
      </div>
    </>
  )
}
export default Wrapper
