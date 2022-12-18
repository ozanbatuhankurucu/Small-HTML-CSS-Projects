import moment from 'moment'
import { ArrowRight, ListBullets } from 'phosphor-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import IndicatorProgress from './ProgressIndicator'

interface ProjectCardProps {
  projectName: string
  to: string
  progress: number
  addedDate: string
}

const ProjectCard: FC<ProjectCardProps> = ({
  projectName,
  to,
  progress,
  addedDate
}) => {
  const progressText = `${progress}/10`

  return (
    <Link to={to}>
      <div className='p-4 bg-[#292B31] h-40 w-60 rounded-xl'>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-base text-white'>{projectName}</div>
          <div className='border-[2px] rounded-full p-[2px] border-[#898A90]'>
            <ArrowRight className='text-white' size={15} />
          </div>
        </div>
        <div className='mt-2 border border-[#36383E]' />
        <div className='flex justify-between items-center mt-4'>
          <div className='flex gap-2 text-[#898A90]'>
            <ListBullets size={15} />
            <span className='font-semibold text-sm'>Progress</span>
          </div>
          <span className='text-white font-bold text-sm'>{progressText}</span>
        </div>
        <IndicatorProgress className='mt-1' value={progress * 10} />
        <div className='inline-block pt-1 px-3 mt-4 rounded-full bg-[#36383E] text-[#9494A1] font-semibold text-sm'>
          {moment(addedDate).format('DD MMM YYYY')}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
