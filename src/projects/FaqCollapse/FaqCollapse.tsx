import React from 'react'
import CollapseItemsList from './components/CollapseItemsList'

const FaqCollapse = () => (
  <div className='min-h-screen flex items-center flex-col py-4 bg-[#f0f0f0]'>
    <h1 className='text-4xl font-medium'>Frequently Asked Questions</h1>
    <CollapseItemsList />
  </div>
)

export default FaqCollapse
