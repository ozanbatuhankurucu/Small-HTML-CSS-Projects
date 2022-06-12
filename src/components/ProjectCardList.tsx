import React from 'react'

function ProjectCardList({ children }: { children: React.ReactNode }) {
  return (
    <ul className='inline-flex flex-col gap-2 border text-slate-900'>
      {children}
    </ul>
  )
}
export default ProjectCardList
