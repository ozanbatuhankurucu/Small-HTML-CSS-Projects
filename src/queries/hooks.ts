import { useQuery } from 'react-query'
import { fetchMovies } from './APIs'
import { Movie } from './types'

export function useMoviesData() {
  const { data, error, isLoading } = useQuery<Movie[]>('movies', fetchMovies)

  return {
    data,
    error,
    isLoading
  }
}
