import React from 'react'
import { Helmet } from 'react-helmet'
import { DiamondAutograder } from './DiamondAutograder'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Diamond Autograder</title>
    </Helmet>
    <div
      style={{
        background: 'linear-gradient(112.87deg, #192736 0%, #18101D 100%)'
      }}
      className='h-screen text-white'>
      <DiamondAutograder />
    </div>
  </>
)
export default Wrapper
