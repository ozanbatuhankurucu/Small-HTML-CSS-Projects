import React from 'react'
import { Helmet } from 'react-helmet'
import FaqCollapse from './FaqCollapse'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>FAQ Collapse</title>
    </Helmet>
    <FaqCollapse />
  </>
)
export default Wrapper
