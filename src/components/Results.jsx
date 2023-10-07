import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useResultContext } from '../contexts/ResultProviderContext'
import Loading from './loader/Loading'
import Error from './erorr/Error'


function Results() {
    const { results, loading, getResult, searchTerm, error } = useResultContext()
    const location = useLocation()
    
    useEffect(() => {
        getResult(`${location.pathname}?q=javascript`)
    }, [])
    console.log(results)
  return (
    <>
    {loading && <Loading/>}
    {error && <Error/>}
    {results?.message ? <Error/> : (
        <div className='p-5'>
            <h1>Result</h1>
        </div>
    )}
    </>
    
  )
}

export default Results