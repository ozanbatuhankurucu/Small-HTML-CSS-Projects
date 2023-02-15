import React from 'react'
import { useLocation } from 'react-router-dom'
import { StateValues } from './types'

export const Results = () => {
  const location = useLocation()
  const myData = location.state

  return <div>Results page</div>
}
