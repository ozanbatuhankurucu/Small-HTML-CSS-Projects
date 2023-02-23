import React from 'react'
import styled from 'styled-components'
import Joke from './components/Joke'
import { useJokeData } from './hooks/useJokeData'

const Container = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
`
const GetJokeButton = styled.button`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
`

export const DadJokes = () => {
  const { joke, isLoading, error, fetchJoke } = useJokeData()

  return (
    <div className='h-screen flex justify-center items-center bg-[#686de0]'>
      <Container className='flex flex-col items-center gap-[50px] bg-white rounded-[10px] w-[800px] py-[50px] px-5'>
        <h3 className='tracking-[2px] opacity-50 font-medium'>
          Don&apos;t Laugh Challenge
        </h3>
        <div className='min-h-[100px] flex justify-center items-center'>
          <Joke joke={joke} error={error} isLoading={isLoading} />
        </div>
        <GetJokeButton
          className='bg-[#9f68e0] text-white border-0 rounded-[10px] py-[14px] px-10 text-base focus:outline-0 active:scale-[0.98]'
          onClick={fetchJoke}>
          Get Another Joke
        </GetJokeButton>
      </Container>
    </div>
  )
}
