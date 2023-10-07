import React, { useContext, useState } from "react"

const ResultContext = React.createContext()
const baseURL = 'https://google-search72.p.rapidapi.com'
export const ResultContextProvider = ({ children }) => {
    const [ results, setResults ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const [ searchTerm, setSearchTerm ] = useState(null)
    const [ darkTheme, setDarkTheme ] = useState(false);

    const getResult = async (type) => {
        try {
            setResults(null)
            setLoading(true)
            const response = await fetch(`${baseURL}${type}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '74fd127e0cmsh517ea480a997086p1915eejsn1efa3cafe7bc',
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
        error,
        setLoading
    }

    return (
        <ResultContext.Provider value={values}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext)

