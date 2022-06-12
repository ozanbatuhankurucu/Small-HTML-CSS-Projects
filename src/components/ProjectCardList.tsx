import React from 'react'

function ProjectCardList({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col gap-2 border text-slate-900'>{children}</div>
  )
}
export default ProjectCardList
