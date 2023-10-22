import React, { FC } from 'react'
import { MovieCard } from './MovieCard'
import { useMoviesData } from '../../../queries/hooks'
import { Movie } from '../../../queries/types'

interface MovieListProps {
  searchedMovies: Movie[]
}

export const MovieList: FC<MovieListProps> = ({ searchedMovies }) => {
  const { data } = useMoviesData()
  const movies = searchedMovies ?? data

  return (
    <div className='grid grid-cols-1 gap-8 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
