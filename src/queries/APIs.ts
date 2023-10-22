import endpoints from './endpoints'

export async function fetchMovies() {
  const response = await fetch(endpoints.MOVIE.DISCOVER)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await response.json()
  return data.results
}

export async function searchMovie(query: string) {
  const response = await fetch(endpoints.MOVIE.SEARCH(query))

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await response.json()
  return data.results
}
