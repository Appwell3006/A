import React from 'react'

const AddHoliday = () => {
  return (
    <div>
        {/* Header of Add Holiday */}
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-0 rounded-lg h-[70px] p-2 flex flex-col justify-center items-start '>
            <div className='ml-2 sm:ml-5'>
                <h1 className='text-xl font-bold sm:text-2xl'>Add Holiday</h1>
                <p className='text-gray-500 text-sm dark:text-gray-300 sm:text-md'>Welcome to Add Holiday</p>
            </div>
        </div>

        {/* Main content of Add leave */}
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[300px] p-4 overflow-x-auto flex justify-center items-left flex-col sm:items-center'>
            <div className='flex flex-col justify-center items-center gap-4 mt-4'> 
                <div>
                    <label className="input w-[390px] sm:w-[500px]">
                        <span className="label">Name of Holiday</span>
                        <input type="text" placeholder="Type Here" />
                    </label>
                </div>
                <div>
                    <select defaultValue="Pick a color" className="select w-[390px] sm:w-[500px]">
                      <option disabled={true}>Pick a Holiday</option>
                      <option>Special Holiday</option>
                      <option>Regular Holiday</option>
                    </select>
                </div>
                <div>
                    <label className="input w-[390px] sm:w-[500px]">
                        <span className="label">Date</span>
                        <input type="Date" />
                    </label>
                </div>
            </div>

            <div className=''>
                <button className="btn btn-primary mt-4">Submit</button>
                <button className="btn btn-secondary mt-4 ml-2">Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default AddHoliday