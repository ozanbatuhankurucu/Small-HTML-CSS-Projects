import { useContentPlaceholderData } from '../../queries/hooks'
import Card from './components/Card'

const ContentPlaceholderContainer = () => {
  const { data, isLoading } = useContentPlaceholderData()

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center bg-[#ecf0f1]'>
      <Card cardData={data} isLoading={isLoading} />
    </div>
  )
}

export default ContentPlaceholderContainer
