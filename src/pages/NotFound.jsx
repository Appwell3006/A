import React from 'react'

const NotFound = () => {
  return (
    <div>
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-0 rounded-lg h-[70px] p-2 flex flex-col justify-center items-start '>
            <div className='ml-2 sm:ml-5'>
            <h1 className='text-xl font-bold sm:text-2xl'>Not Found</h1>
            <p className='text-gray-500 text-sm dark:text-gray-300 sm:text-md'>The page you are looking for does not exist.</p>
            </div>
        </div>
    </div>
  )
}

export default NotFound