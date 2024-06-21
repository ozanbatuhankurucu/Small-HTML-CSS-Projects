import endpoints from './endpoints'
import { ContentPlaceholderType } from './types'

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

export function fetchContentPlaceholder(): Promise<ContentPlaceholderType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Dummy data to be returned
      const dummyData: ContentPlaceholderType = {
        cardImage:
          'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D',
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolore ipsum.',
        userName: 'Ozan Kurucu',
        userImage:
          'https://pbs.twimg.com/profile_images/1765658127528013824/1GTWvw7L_400x400.jpg',
        userJoiningDate: new Date().toISOString()
      }

      // Simulate a successful fetch with the dummy data
      resolve(dummyData)
    }, 1000) // Simulate a network delay of 1 second
  })
}
