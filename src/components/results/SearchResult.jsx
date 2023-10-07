import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useResultContext } from '../../contexts/ResultProviderContext'
import Loading from '../loader/Loading'
import Error from '../erorr/Error'

function SearchResult() {
    const { results, loading, getResult, searchTerm, error } = useResultContext()
    useEffect(() => {
        getResult(`/search?q=${searchTerm} videos`)  
    }, [searchTerm])
    console.log(results)
  return (
    <>
    {loading && <Loading/>}
    {results?.message && <Error/>}
    {results?.items &&
        <div className='mt-36 flex flex-wrap justify-between space-y-6 sm:px-20 lg:px-56'>
            {results.items.map(({ link, title, snippet }, index) => (
                <div key={index} className='w-full md:w-2/5'>
                    <a href={link} target='_blank' rel='noreferrer'>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                            {link.length > 30 ? link.substring(0, 30) : link}
                        </p>
                        <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                            {title}
                        </p>
                        <p className='text-sm text-gray-700 dark:text-gray-200'>
                            {snippet.length > 60 ? `${snippet.substring(0, 100)}...` : snippet}
                        </p>
                    </a>
                </div>
            ))}
        </div>
       
    }
    </>
    
  )
}

export default SearchResult