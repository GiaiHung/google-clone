import { createContext, useContext, useState } from 'react'

const ResultContext = createContext()

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultProvider = ({ children }) => {
    const [results, setResults] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(false)

    // search, images, videos, news
    const getResults = async (type) => {
        setLoading(true)

        const response = await fetch(`${baseUrl}/${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': '7a5e317144msh5de0458daf7262cp168dc1jsn751ed457ef1a',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
            },
        })

        const data = await response.json()

        setResults(data)
        setLoading(false)
    }

    return (
        <ResultContext.Provider value={{ results, searchTerm, loading, getResults, setSearchTerm }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => {
    return useContext(ResultContext)
}

