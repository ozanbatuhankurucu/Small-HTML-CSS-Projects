import React from 'react'
import { MovieCard } from './MovieCard'
import { useMoviesData } from '../../../queries/hooks'

export const MovieList = () => {
  const { data: movies } = useMoviesData()

  return (
    <div className='grid grid-cols-1 gap-8 bg-[#22254b] p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
