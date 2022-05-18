import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard() {
  return (
    <Link to='hidden-search-widget'>
      <div className='p-2 bg-white text-center shadow-md  rounded-lg  h-32 flex items-center justify-center md:p-0'>
        <h3 className='text-3xl font-bold'> Hidden Search Widget</h3>
      </div>
    </Link>
  )
}

export default ProjectCard
