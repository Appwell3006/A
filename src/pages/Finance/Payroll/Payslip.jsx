import { Table } from 'lucide-react'
import React from 'react'
import TablePayroll from '../../../components/TablePayrollPayslip'
import SearchInput from '../../../components/SearchInput'

const Payslip = () => {
  return (
    <div>
        {/* Header of Payslip */}
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-0 rounded-lg h-[70px] p-2 flex flex-col justify-center items-start '>
            <div className='ml-2 sm:ml-5'>
                <h1 className='text-xl font-bold sm:text-2xl'>Payslip</h1>
                <p className='text-gray-500 text-sm dark:text-gray-300 sm:text-md'>Welcome to Payslip</p>
            </div>
        </div>

        {/* Main content of Payslip */}

        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[500px] p-4 overflow-x-auto'>
            <div className='flex flex-row-reverse'>
                <SearchInput />
            </div>
            <div>
                <TablePayroll />
            </div>
        </div>

    </div>
  )
}

export default Payslip