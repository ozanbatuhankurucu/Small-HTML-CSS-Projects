import { Spinner } from '@chakra-ui/react'
import { FC } from 'react'

interface JokeProps {
  joke: string
  error: Error | null
  isLoading: boolean
}
const Joke: FC<JokeProps> = ({ error, isLoading, joke }) => {
  if (error) {
    return <p className='text-red-600 font-medium'>{error.message}</p>
  }

  if (isLoading) {
    return <Spinner size='lg' />
  }

  return (
    <h1 className='max-w-[600px] font-medium text-3xl leading-10 tracking-[1px] text-center'>
      {joke}
    </h1>
  )
}

export default Joke
