import React, { useState, useEffect } from 'react';
import TableforActivityLog from '../components/TableforActivityLog';



const ActivityLog = () => {
  

  return (
    <div>
        <div>
          {/*header of Activity Log */}
          <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-0 rounded-lg h-[70px] p-2 flex flex-col justify-center items-start '>
              <div className='ml-2 sm:ml-5'>
              <h1 className='text-xl font-bold sm:text-2xl'>Activity Log</h1>
              <p className='text-gray-500 text-sm dark:text-gray-300 sm:text-md'>Welcome to Activity Log</p>
              </div>
          </div>

          {/*main content of Activity Log*/}
          <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[700px] p-4 overflow-x-auto'>
              <TableforActivityLog />
          </div>
        </div>
    </div>
  );
};

export default ActivityLog;