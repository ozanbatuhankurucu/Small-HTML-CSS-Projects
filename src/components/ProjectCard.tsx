import { Link } from 'react-router-dom'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

interface ProjectCardProps {
  name: string
  to: string
}

function ProjectCard({ name, to }: ProjectCardProps) {
  return (
    <Link className='relative' to={to}>
      <div className='h-[2px] absolute -top-1 -left-2  bg-slate-900 w-10 mb-1' />
      <div className='w-[2px] absolute -top-0 -left-2 bg-slate-900 h-3' />
      <div className='flex gap-4 items-center'>
        <div className='font-medium text-xl'>{name}</div>
        <FaRegArrowAltCircleRight size={20} />
      </div>
    </Link>
  )
}

export default ProjectCard
