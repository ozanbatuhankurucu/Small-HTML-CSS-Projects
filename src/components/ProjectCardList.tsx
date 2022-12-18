import { FC, ReactNode } from 'react'

interface ProjectCardListProps {
  children: ReactNode
}
const ProjectCardList: FC<ProjectCardListProps> = ({ children }) => (
  <div className='flex flex-wrap gap-8 mt-2'>{children}</div>
)
export default ProjectCardList
