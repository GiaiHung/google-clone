import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/images', text: '📸 Images' },
  { url: '/videos', text: '🎞 Videos' },
]

function Search() {
  return (
    <div>
      <p>search</p>
    </div>
  )
}

export default Search
