import React from 'react'
import { Helmet } from 'react-helmet'
import EventKeycodes from './EventKeycodes'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Event Keycodes</title>
    </Helmet>
    <EventKeycodes />
  </>
)
export default Wrapper
