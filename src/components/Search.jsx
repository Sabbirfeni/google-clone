import React, { useEffect, useState } from 'react'
import Links from './Links/Links'
import { useResultContext } from '../contexts/ResultProviderContext'
import { useDebounce } from 'use-debounce';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [ text, setText ] = useState('')
  const { searchTerm, setSearchTerm, getResult, setLoading } = useResultContext();
  const [ debouncedValue ] = useDebounce(text, 500)
  const navigate = useNavigate();
  const handleSubmit = e => {
    if(e.key === 'Enter') {
      setLoading(true)
      navigate('/search')
      setSearchTerm(text)
    }
  }
  return (
    <div>
      <input 
        type="text" 
        value={text}
        className='sm:w-96 w-80 h-10 mt-2 md:mt-0 dark:bg-gray-200 border rounded-full shadow-sm outline-none px-6 py-3 text-black hover:shadow-lg'
        onChange={e => setText(e.target.value)}
        onKeyDown={e => handleSubmit(e)}
      />
    </div>
  )
}

export default Search