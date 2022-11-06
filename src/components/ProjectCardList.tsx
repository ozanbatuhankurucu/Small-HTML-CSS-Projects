import React, { FC, ReactNode } from 'react'

interface ProjectCardListProps {
  children: ReactNode
}
const ProjectCardList: FC<ProjectCardListProps> = ({ children }) => (
  <div className='flex flex-col gap-2 border text-slate-900'>{children}</div>
)
export default ProjectCardList
