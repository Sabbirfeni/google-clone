import React from 'react'
import { useResultContext } from '../contexts/ResultProviderContext'

function Error() {
  return (
    <div className='flex justify-center items-center h-screen text-red-300'>
        <h1>Somthing went wrong!</h1>
    </div>
  )
}

export default Error