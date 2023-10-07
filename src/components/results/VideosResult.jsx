import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useResultContext } from '../../contexts/ResultProviderContext'
import Loading from '../loader/Loading'

import ReactPlayer from 'react-player'

function Videos() {
    const { results, loading, getResult, searchTerm, error } = useResultContext()
    
    useEffect(() => {
        getResult(`/search?q=${searchTerm} videos`)
    }, [])
  return (
    <>
    {loading || results?.message && <Loading/>}
    {results?.items &&
        <div className='mt-32 flex flex-wrap justify-center items-center lg:px-30'>
            {results.items.map(( { link }, index) => (
                <div key={index} className='p-2'>
                    <ReactPlayer url={link} controls width='355px' height='200px'/>
                </div>
            ))}
        </div>
       
    }
    </>
    
  )
}

export default Videos