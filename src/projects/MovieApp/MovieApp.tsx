import React, { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { MovieList } from './components/MovieList'

export const MovieApp = () => {
  const [search, setSearch] = useState('')

  return (
    <div className='bg-gray-900 min-h-screen'>
      <SearchBar search={search} setSearch={setSearch} />
      <MovieList />
    </div>
  )
}
