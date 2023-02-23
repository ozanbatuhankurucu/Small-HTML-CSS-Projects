import { useEffect, useState } from 'react'

export const useJokeData = () => {
  const [joke, setJoke] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchJoke = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'text/plain'
        }
      })
      const jokeText = await response.text()
      setJoke(jokeText)
    } catch (err) {
      setError(err as Error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  return { joke, isLoading, error, fetchJoke }
}
