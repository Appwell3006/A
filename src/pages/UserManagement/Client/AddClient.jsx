import React from 'react'

const AddClient = () => {
  return (
    <div>
        {/* Header of Add Client */}
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-0 rounded-lg h-[70px] p-2 flex flex-col justify-center items-start '>
            <div className='ml-2 sm:ml-5'>
                <h1 className='text-xl font-bold sm:text-2xl'>Add Client</h1>
                <p className='text-gray-500 text-sm dark:text-gray-300 sm:text-md'>Welcome to Add Client</p>
            </div>
        </div>

        {/* Main content of Add Client */}
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[600px] p-4 '>

        </div>

        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[600px] p-4 overflow-y-auto overflow-x-auto'>
            <div className='grid grid-cols-4 gap-3 text-center'>
                {/*1 row */}
                <div></div>
                <div></div>
                <div className='col-span-2'>12 Hours Shift</div>

                {/*2 row */}
                <div></div>
                <div></div>
                <div>Dayshift</div>
                <div>Nightshift</div>
            </div>
        </div>

    </div>
  )
}

export default AddClient