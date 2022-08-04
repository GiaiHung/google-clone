import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

function Navbar({ darkTheme, setDarkTheme }) {
    return (
        <div className="p-5 pb-2 flex flex-col gap-2 justify-center items-center border-b dark:border-gray-700 border-gray-200 shadow-md">
            <div className="flex justify-between items-center space-x-5 w-full">
                <Link to="/">
                    <p className="text-2xl font-bold text-white bg-blue-500 py-2 px-3 rounded-lg dark:bg-gray-50 dark:text-gray-900">
                        Google 🔎
                    </p>
                </Link>
                <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='bg-gray-900 px-3 py-2 text-white rounded dark:text-gray-900 dark:bg-white font-bold'>
                    {darkTheme ? 'Light 💡' : 'Dark 🌙'}
                </button>
            </div>
            <Search />
        </div>
    )
}

export default Navbar
