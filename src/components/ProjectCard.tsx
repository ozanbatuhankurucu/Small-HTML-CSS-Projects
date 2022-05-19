import { Link } from 'react-router-dom'

interface ProjectCardProps {
  name: string
  to: string
}

function ProjectCard({ name, to }: ProjectCardProps) {
  return (
    <Link to={to}>
      <div className='p-2 bg-white text-center shadow-md  rounded-lg  h-32 flex items-center justify-center md:p-0'>
        <h3 className='text-3xl font-bold'> {name}</h3>
      </div>
    </Link>
  )
}

export default ProjectCard
