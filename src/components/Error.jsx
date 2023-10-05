import React from 'react'
import { useResultContext } from '../contexts/ResultProviderContext'

function Error() {
    const { results } = useResultContext()

  return (
    <div className='flex justify-center items-center h-screen text-red-300'>
        <h1>{results.message}</h1>
    </div>
  )
}

export default Error