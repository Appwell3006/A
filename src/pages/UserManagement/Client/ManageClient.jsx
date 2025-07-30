import React from 'react'
import TableManageClient from '../../../components/TableManageClient'
import SearchInput from '../../../components/SearchInput'

const ManageClient = () => {
  return (
    <div>
        {/* Header of Manage Employee */}
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-0 rounded-lg h-[70px] p-2 flex flex-col justify-center items-start '>
            <div className='ml-2 sm:ml-5'>
                <h1 className='text-xl font-bold sm:text-2xl'>Manage Client</h1>
                <p className='text-gray-500 text-sm dark:text-gray-300 sm:text-md'>Welcome to Manage Client</p>
            </div>
        </div>

        {/* Main content of Manage Employee */}
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[600px] p-4 overflow-x-auto'>
            
            <div className='flex flex-col sm:flex-row justify-start items-center mb-4'>
              <SearchInput />
            </div>
            <div>
              <TableManageClient />
            </div>
        </div>
    </div>
  )
}

export default ManageClient