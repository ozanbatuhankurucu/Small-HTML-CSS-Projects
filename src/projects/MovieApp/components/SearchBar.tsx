import React, { FC, KeyboardEvent } from 'react'

interface SearchBarProps {
  search: string
  setSearch: (search: string) => void
  searchMovie: (search: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({
  search,
  setSearch,
  searchMovie
}) => {
  const handleKeyPress = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const inputElement = event.target as HTMLInputElement
      const query = inputElement.value
      setSearch('')
      await searchMovie(query)
    }
  }

  return (
    <header className='flex justify-end p-4 bg-[#373b69]'>
      <input
        className='p-2 bg-transparent rounded-full text-base text-white border-[2px] border-[#22254b] py-2 px-4 placeholder:text-[#7378c5]'
        value={search}
        type='text'
        placeholder='Search'
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </header>
  )
}
