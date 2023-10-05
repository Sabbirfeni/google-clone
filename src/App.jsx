import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { useResultContext } from './contexts/ResultProviderContext';

function App() {
  const { darkTheme } = useResultContext()
  return (
    <div className={darkTheme ? 'dark' : ''}>
        <div className='bg-gray-100 dark:bg-gray-600 dark:text-gray-200 min-h-screen'>
            <Navbar />
              <Outlet/>
            <Footer/>
        </div>
    </div>
  )
}

export default App