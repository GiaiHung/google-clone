import React, { useEffect } from 'react'
import { useResultContext } from '../context/resultProvider'
import Loading from './Loading'

function Results() {
    const { getResults, isLoading, results, searchTerm } = useResultContext()
    useEffect(() => {
        getResults('search/q=elon+musk')
    }, [])
    console.log(results)
    if (isLoading) return <Loading />
    return <div>results</div>
}

export default Results
