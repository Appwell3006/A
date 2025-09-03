import { Search } from 'lucide-react'
import React from 'react'
import SearchInput from '../components/SearchInput'
import TableAttendance15 from '../components/Attendance/TableAttendance15'

const Attendance = () => {
  return (
    <div>
      {/*header of dashboard */}
      <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-0 rounded-lg h-[70px] p-2 flex flex-col justify-center items-start '>
        <div className='ml-2 sm:ml-5'>
          <h1 className='text-xl font-bold sm:text-2xl'>Attendance</h1>
          <p className='text-gray-500 text-sm dark:text-gray-300 sm:text-md'>Welcome to Attendance</p>
        </div>
      </div>

      {/*Attendance page content */}
      <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[160px] sm:h-[70px] p-4 flex justify-center items-left flex-col sm:flex-row gap-2 items-center sm:items-center'>
        <div className='flex flex-row'>
          <SearchInput />
        </div>
        <div className=''>
            <label className="input w-[270px] sm:w-[300px]">
              <span className="label">Select Date</span>
              <input type="Date" />
            </label>
        </div>
        <div>
          <button className="btn btn-primary">Select</button>
        </div>
      </div>

      <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[700px] p-4 overflow-x-auto'>
        <div>
          <h3 className='font-bold text-2xl'>January 1 - 15 2025</h3>
        </div>
        <div>
          <TableAttendance15 />
        </div>
        
      </div>

    </div>
  )
}

export default Attendance