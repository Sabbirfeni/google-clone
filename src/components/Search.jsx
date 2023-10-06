import React, { useState } from 'react'
import Links from './Links/Links'

function Search() {
  const [ text, setText ] = useState('Fish')
  return (
    <div>
      <input 
        type="text" 
        value={text}
        className='sm:w-96 w-50 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none px-6 py-3 text-black hover:shadow-lg'
      />
    </div>
  )
}

export default Search