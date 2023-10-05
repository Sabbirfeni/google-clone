import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import { useResultContext } from '../contexts/ResultProviderContext'

function Navbar() {
  const { darkTheme, setDarkTheme, loading } = useResultContext()
  return (
    <div className='fixed w-full px-5 py-3 flex flex-wrap sm:justify-between justify-center items-center border-b border-gray-200 bg-gray-200 dark:border-gray-700 dark:bg-gray-900'>
        <div className='flex justify-between items-center space-x-5 w-screen'>
          <Link to='/' className='text-2xl bg-blue-500 text-white font-bold py-1 px-4 rounded dark:bg-gray-800'>
            Goggl
          </Link>
          <button onClick={() => setDarkTheme(!darkTheme)} className='text-md bg-white dark:bg-gray-50 dark:text-gray-900 border rounded-full px-5 py-1 hover:shadow-lg'>
            {darkTheme ? 'Light' : 'Dark'}
          </button>
        </div>
        <Search/>
    </div>
  )
}

export default Navbar