import React, { FC } from 'react'
import { Movie } from '../../../queries/types'

interface MovieCardProps {
  movie: Movie
}

export const MovieCard: FC<MovieCardProps> = ({ movie }) => (
  <div className='rounded-lg rounded-tl-none overflow-hidden shadow-lg bg-[#373b69] relative'>
    <img
      src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
      alt={movie.title}
      className='w-full h-[450px] object-cover'
    />
    <div className='p-4'>
      <h3 className='text-white text-lg'>{movie.title}</h3>
      <div className='bg-[#22254b] text-orange-400 p-2 absolute top-0 left-0 rounded-br-md border border-[#373b69] shadow-sm'>
        {movie.vote_average.toFixed(1)}
      </div>
    </div>
  </div>
)
