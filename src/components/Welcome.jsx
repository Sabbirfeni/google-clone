import React, { useEffect } from 'react'
import { useResultContext } from '../contexts/ResultProviderContext'

function Welcome() {
  const { setSearchTerm } = useResultContext();
  useEffect(() => {
    setSearchTerm(null)
  }, [])
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <h1>Welcome</h1>
    </div>
  )
}

export default Welcome