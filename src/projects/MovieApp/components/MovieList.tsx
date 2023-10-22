import React, { FC } from 'react'
import { Spinner } from '@chakra-ui/react'
import { MovieCard } from './MovieCard'
import { useMoviesData } from '../../../queries/hooks'
import { Movie } from '../../../queries/types'

interface MovieListProps {
  searchedMovies: Movie[]
  searchedMoviesIsLoading: boolean
}

export const MovieList: FC<MovieListProps> = ({
  searchedMovies,
  searchedMoviesIsLoading
}) => {
  const { data, isLoading } = useMoviesData()
  const movies = searchedMovies ?? data

  if (searchedMoviesIsLoading || isLoading) {
    return (
      <div className='flex justify-center mt-4'>
        <Spinner size='lg' color='white' />
      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 gap-8 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
