import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { useResultContext } from './contexts/ResultProviderContext';

function App() {
  const { darkTheme } = useResultContext()
  return (
    <div className={darkTheme ? 'dark' : ''}>
        <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
            <Navbar />
              <div className='p-4 min-h-screen'>
                <Outlet/>
              </div>
            <Footer/>
        </div>
    </div>
  )
}

export default App