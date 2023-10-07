import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import { useResultContext } from '../contexts/ResultProviderContext'
import Links from './Links/Links'
import DarkThemeButton from './darkThemeButton/DarkThemeButton'

function Navbar() {
  const { darkTheme, setDarkTheme, searchTerm } = useResultContext()
  return (
    <div className='fixed z-50 w-full px-5 py-3 md:py-5 sm:px-24 lg:px-60 flex flex-wrap sm:justify-between justify-center items-center border-b border-gray-200 bg-gray-200 dark:border-gray-700 dark:bg-gray-900'>
        <div className='flex justify-between items-center md:flex-row flex-col space-x-5 w-screen'>
          <Link to='/' className='text-2xl bg-blue-500 text-white font-bold py-1 px-4 rounded dark:bg-gray-800'>
            Goggl
          </Link>
          <Search/>
          <DarkThemeButton/>
        </div>
        {searchTerm && <Links/>}
    </div>
  )
}

export default Navbar