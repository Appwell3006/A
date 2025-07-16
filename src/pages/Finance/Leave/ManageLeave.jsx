import React from 'react'
import TablePayrollManageLeave from '../../../components/TablePayrollManageLeave'

const ManageLeave = () => {
  return (
    <div>
        {/* Header of Add leave */}
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-0 rounded-lg h-[70px] p-2 flex flex-col justify-center items-start '>
            <div className='ml-2 sm:ml-5'>
                <h1 className='text-xl font-bold sm:text-2xl'>Manage Leave</h1>
                <p className='text-gray-500 text-sm dark:text-gray-300 sm:text-md'>Welcome to Manage Leave</p>
            </div>
        </div>

        {/* Main content of Add leave */}
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[500px] p-4 overflow-x-auto'>
            <TablePayrollManageLeave />
        </div>
    </div>
  )
}

export default ManageLeave