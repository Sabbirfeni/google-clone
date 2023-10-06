import React, { useContext, useState } from "react"

const ResultContext = React.createContext()
const baseURL = 'https://google-search72.p.rapidapi.com'
export const ResultContextProvider = ({ children }) => {
    const [ results, setResults ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const [ searchTerm, setSearchTerm ] = useState('fish')
    const [ darkTheme, setDarkTheme ] = useState(false);

    const getResult = async (type) => {
        try {
            setResults(null)
            setLoading(true)
            const response = await fetch(`${baseURL}${type}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'bccbb31331mshe193e9bf9987422p15b067jsnc8127abec52d',
                    'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
                  }
            });
            const data = await response.json();
            setResults(data)
            setLoading(false)
        } catch(error) {
            setError(error.message)
        }
        
        
        
    }

    const values = {
        results,
        loading,
        searchTerm,
        setSearchTerm,
        getResult,
        darkTheme,
        setDarkTheme,
        error
    }

    return (
        <ResultContext.Provider value={values}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext)

