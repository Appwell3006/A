import React from 'react'
import TablePayrollSummary from '../../../components/TablePayrollSummary'
import TablePayrollSummaryA from '../../../components/TablePayrollSummaryA'
import SearchInput from '../../../components/SearchInput'

const Summary = () => {
  return (
    <div>
        {/* Header of Summary */}
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-0 rounded-lg h-[70px] p-2 flex flex-col justify-center items-start '>
            <div className='ml-2 sm:ml-5'>
                <h1 className='text-xl font-bold sm:text-2xl'>Summary</h1>
                <p className='text-gray-500 text-sm dark:text-gray-300 sm:text-md'>Welcome to Summary</p>
            </div>
        </div>

        {/* Main content of Summary */}
        <div className="divider divider-start mx-7 mt-8 font-bold uppercase text-1xl">Employee Work Hours and Holiday Summary</div>
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[500px] p-4 overflow-x-auto'>
            <div className='flex flex-row-reverse'>
                <SearchInput />
            </div>
            <div>
                <TablePayrollSummary />
            </div>
        </div>

        <div className="divider divider-start mx-7 mt-8 font-bold uppercase text-1xl">Employee Work and Pay Summary</div>
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-6 rounded-lg h-[500px] p-4 overflow-x-auto'>
            <div className='flex flex-row-reverse'>
                <SearchInput />
            </div>
            <div>
                <TablePayrollSummaryA />
            </div>
        </div>

        <div className="divider divider-start mx-7 mt-8 font-bold uppercase text-1xl">Attendance</div>
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-6 rounded-lg h-[500px] p-4 overflow-x-auto'>
            <div className='flex flex-row-reverse'>
                <SearchInput />
            </div>
            <div>
                
            </div>
        </div>

    </div>
  )
}

export default Summary