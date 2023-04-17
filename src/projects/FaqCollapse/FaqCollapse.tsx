import React from 'react'
import CollapseItemsList from './components/CollapseItemsList'

const FaqCollapse = () => (
  <div className='min-h-screen flex items-center flex-col py-4 bg-gray-100'>
    <h1 className='text-4xl font-medium'>Frequently Asked Questions</h1>
    <CollapseItemsList />
  </div>
)

export default FaqCollapse
