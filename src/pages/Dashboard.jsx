import React from 'react'

const Dashboard = () => {
  return (
    <div>
      {/*header of dashboard */}
      <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-0 rounded-lg h-[70px] p-2 flex flex-col justify-center items-start '>
        <div className='ml-2 sm:ml-5'>
          <h1 className='text-xl font-bold sm:text-2xl'>Dashboard</h1>
          <p className='text-gray-500 text-sm dark:text-gray-300 sm:text-md'>Welcome to Dashboard</p>
        </div>
      </div>

      {/*main content of dashboard */}

      {/* Cards section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3'>
        <div className='card'>

        </div>

        <div className='card'>

        </div>
        <div className='card'>

        </div>
        <div className='card'>

        </div>
      </div>

      {/* Charts section */}

        <div className='grid grid-cols-1 lg:grid-cols-3 p-3 mt-[-19px]'>

          <div className='card-third-row col-span-2 '>

          </div>
          <div className='card-third-row'>
              
          </div>

        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 p-3 mt-[-19px]'>

          <div className='card-third-row '>

          </div>
          <div className='card-third-row col-span-2'>

          </div>

        </div>
      

    </div>
  )
}

export default Dashboard