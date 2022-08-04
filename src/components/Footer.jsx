import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className='text-center text-2xl font-bold p-7 flex justify-center items-center border-t border-gray-400 dark:border-gray-700'>
      <h1>Google © {year}, Inc.</h1>
    </div>
  )
}

export default Footer
