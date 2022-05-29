import { Link } from 'react-router-dom'
import ProjectCardImages from '../assets/images'
import { imgSrcType } from '../types'

interface ProjectCardProps {
  name: string
  to: string
  imgSrc: imgSrcType
}

function ProjectCard({ name, to, imgSrc }: ProjectCardProps) {
  return (
    <Link to={to}>
      <div className='rounded-xl h-32'>
        <img
          className='w-full border-t rounded-t-xl'
          src={ProjectCardImages[imgSrc]}
          alt={imgSrc}
        />
        <div className='w-full border-b py-2 rounded-b-xl text-center text-lg font-bold text-gray-100 bg-slate-700'>
          {name}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
