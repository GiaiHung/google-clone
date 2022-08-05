import React from 'react'
import { useLocation } from 'react-router-dom'
import Search from './Search'

function Home() {
  const { pathname } = useLocation()

  return (
    <div className="flex flex-col gap-20 justify-center items-center min-h-[calc(100vh-109px)]">
      <h1 className="text-7xl text-gray-900 font-bold dark:text-gray-200">
        Google
      </h1>
      {pathname === '/' && <Search />}
    </div>
  )
}

export default Home
