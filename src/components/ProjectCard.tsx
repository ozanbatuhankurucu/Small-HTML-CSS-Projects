import { Link } from 'react-router-dom'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

interface ProjectCardProps {
  name: string
  to: string
}

function ProjectCard({ name, to }: ProjectCardProps) {
  return (
    <Link to={to}>
      <div className='flex'>
        <div className='flex gap-2 items-center'>
          <span className='font-medium'>{name}</span>
          <FaRegArrowAltCircleRight size={16} />
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
