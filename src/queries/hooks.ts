import { useMutation, useQuery } from 'react-query'
import { fetchContentPlaceholder, fetchMovies, searchMovie } from './APIs'
import { Movie } from './types'

export function useMoviesData() {
  const { data, error, isLoading } = useQuery<Movie[]>('movies', fetchMovies)

  return {
    data,
    error,
    isLoading
  }
}

export function useSearchMovie() {
  const { mutateAsync, data, error, isLoading } = useMutation(searchMovie)

  return {
    mutateAsync,
    data,
    error,
    isLoading
  }
}

export function useContentPlaceholderData() {
  return useQuery('content-placeholder', fetchContentPlaceholder)
}
