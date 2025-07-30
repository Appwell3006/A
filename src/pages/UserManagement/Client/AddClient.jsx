import React from 'react'
import TableAddClient from '../../../components/TableAddClient'

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
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[300px] p-4 flex flex-col justify-center items-center overflow-x-auto gap-3'>
                <div>
                    <label className="input w-[390px] sm:w-[500px]">
                        <span className="label">Client Name</span>
                        <input type="text" placeholder="Type Here" />
                    </label>
                </div>
                <div>
                    <label className="input w-[390px] sm:w-[500px]">
                        <span className="label">Cient Code</span>
                        <input type="text" placeholder="Type Here" />
                    </label>
                </div>
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Upload the Papers</legend>
                        <input type="file" className="file-input" />
                    </fieldset>
                </div>
                <div>
                  <button className="btn btn-success mt-4">set location</button>
                </div>
        </div>

        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[600px] p-4 overflow-y-auto overflow-x-auto'>
            <TableAddClient />
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

export default AddClient