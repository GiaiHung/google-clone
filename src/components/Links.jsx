import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/news', text: '📰 News' },
    { url: '/images', text: '📸 Images' },
    { url: '/video', text: '🎞 Videos' },
  ]

function Links() {
  const { pathname } = useLocation()

  return (
    <div className='flex justify-around md:justify-between items-center mt-4 w-80 shrink-0 md:w-96 m-auto'>
      {links.map(({url,text},index) => (
        <NavLink key={index} to={url} className={pathname === url ? 'text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' : 'color-gray-900 dark:color-gray-200'}>{text}</NavLink>
      ))}
    </div>
  )
}

export default Links
