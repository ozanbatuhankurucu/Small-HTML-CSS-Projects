import React from 'react'
import { Helmet } from 'react-helmet'
import { DadJokes } from './DadJokes'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Dad Jokes</title>
    </Helmet>
    <DadJokes />
  </>
)
export default Wrapper
