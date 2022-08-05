import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from 'use-debounce'
import { useResultContext } from '../context/resultProvider'

function Search() {
  const [text, setText] = useState('')
  const { setSearchTerm } = useResultContext()
  const [debouncedValue] = useDebounce(text, 1000)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate('/search')
  }

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue)
    }
  }, [debouncedValue])

  return (
    <div className="mt-3 md:-mt-12">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search anything..."
          className="bg-slate-200 dark:bg-slate-600 w-80 md:w-96 outline-none rounded-full px-5 py-2 hover:shadow-2xl"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Search
