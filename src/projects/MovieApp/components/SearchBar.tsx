import React, { ChangeEventHandler, FC } from 'react'

interface SearchBarProps {
  search: string
  setSearch: (search: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({ search, setSearch }) => {
  const handleInputOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value)
  }

  return (
    <header className='flex justify-end p-4 bg-[#373b69]'>
      <input
        className='p-2 bg-transparent rounded-full text-base text-white border-[2px] border-[#22254b] py-2 px-4 placeholder:text-[#7378c5]'
        value={search}
        type='text'
        placeholder='Search'
        onChange={handleInputOnChange}
      />
    </header>
  )
}
