import React, { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { MovieList } from './components/MovieList'
import { useSearchMovie } from '../../queries/hooks'

export const MovieApp = () => {
  const [search, setSearch] = useState('')
  const { data, mutateAsync } = useSearchMovie()

  return (
    <div className='bg-[#22254b] min-h-screen'>
      <SearchBar
        search={search}
        setSearch={setSearch}
        searchMovie={mutateAsync}
      />
      <MovieList searchedMovies={data} />
    </div>
  )
}
