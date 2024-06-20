import { useContentPlaceholderData } from '../../queries/hooks'
import Card from './components/Card'

const ContentPlaceholder = () => {
  const { data, isLoading } = useContentPlaceholderData()

  return (
    <div className='h-screen w-full flex justify-center items-center bg-[#ecf0f1]'>
      <Card cardData={data} isLoading={isLoading} />
    </div>
  )
}

export default ContentPlaceholder
