import React from 'react'
import PersonalInfo from '../../../components/PersonalInfo'
import EducationalBackground from '../../../components/EducationalBackground'
import EmploymentRecord from '../../../components/EmploymentRecord'

const AddEmployee = () => {
  return (
    <div>
        {/* Header of Add Employee */}
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-0 rounded-lg h-[70px] p-2 flex flex-col justify-center items-start '>
            <div className='ml-2 sm:ml-5'>
                <h1 className='text-xl font-bold sm:text-2xl'>Add Employee</h1>
                <p className='text-gray-500 text-sm dark:text-gray-300 sm:text-md'>Welcome to Add Emplyee</p>
            </div>
        </div>

        {/* Main content of Add Employee */}
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[600px] p-4 overflow-x-auto'>
            <div>
                <div className="divider divider-neutral">1. Personal Data</div>
            </div>

            {/*input date of personal data */}
            <div className='flex flex-col justify-center items-center  mt-4 '>
                <PersonalInfo />
            </div>
            
            
        </div>
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[360px] p-4 '>
            <div>
                <div className="divider divider-neutral">2. Educational Background</div>
            </div>
            <div className='flex flex-col justify-center items-center  mt-4 '> 
                <EducationalBackground />
            </div>
            
        </div>
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[300px] p-4 '>
            <div>
                <div className="divider divider-neutral">3. Employement Record</div>
            </div>
            <div className='overflow-y-auto'>
                <EmploymentRecord />
            </div>
            
        </div>

        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[70px]'>
            <div className='flex flex-row justify-center items-center'>
                <button className="btn btn-primary mt-4">Submit</button>
                <button className="btn btn-secondary mt-4 ml-2">Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee