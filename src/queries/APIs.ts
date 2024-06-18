import endpoints from './endpoints'
import { ContentPlaceholder, FetchContentPlaceholderResponse } from './types'

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

export function fetchContentPlaceholder(): Promise<FetchContentPlaceholderResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Dummy data to be returned
      const dummyData: ContentPlaceholder = {
        cardImage: 'https://via.placeholder.com/150',
        title: 'Fake Title',
        description: 'This is a fake description for testing purposes.',
        userName: 'John Doe',
        userImage: 'https://via.placeholder.com/50',
        userJoiningDate: new Date().toISOString()
      }

      // Simulate a successful fetch with the dummy data
      resolve({
        status: 200,
        data: dummyData
      })
    }, 1000) // Simulate a network delay of 1 second
  })
}
