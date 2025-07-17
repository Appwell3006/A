import React from 'react'

const Addleave = () => {
  return (
    <div>
        {/* Header of Add leave */}
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-0 rounded-lg h-[70px] p-2 flex flex-col justify-center items-start '>
            <div className='ml-2 sm:ml-5'>
                <h1 className='text-xl font-bold sm:text-2xl'>Add Leave</h1>
                <p className='text-gray-500 text-sm dark:text-gray-300 sm:text-md'>Welcome to Add Leave</p>
            </div>
        </div>

        {/* Main content of Add leave */}
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[600px] p-4 flex justify-center items-left flex-col sm:items-center'>
            <div className='flex flex-col gap-4 mt-4'> 
                <div>
                    <label className="input w-[390px] sm:w-[500px]">
                        <span className="label">Employee Name</span>
                        <input type="text" placeholder="Type Here" />
                    </label>
                </div>
                <div>
                    <label className="input w-[390px] sm:w-[500px]">
                        <span className="label">Employee Code</span>
                        <input type="text" placeholder="Type Here" />
                    </label>
                </div>
                <div>
                    <label className="input w-[390px] sm:w-[500px]">
                        <span className="label">From*</span>
                        <input type="Date" />
                    </label>
                </div>
                <div>
                    <label className="input w-[390px] sm:w-[500px]">
                        <span className="label">To*  </span>
                        <input type="Date" />
                    </label>
                </div>
                <div>
                    <label className="input w-[390px] sm:w-[500px]">
                        <span className="label">Leave type</span>
                        <input type="text" placeholder="Type Here" />
                    </label>
                </div>
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Reason</legend>
                        <textarea className="textarea h-24 w-[390px] sm:w-[500px]" placeholder="Comment"></textarea>
                    </fieldset>
                </div>
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Upload the letter</legend>
                        <input type="file" className="file-input" />
                    </fieldset>
                </div>
            </div>

            <div>
                <button className="btn btn-primary mt-4">Submit</button>
                <button className="btn btn-secondary mt-4 ml-2">Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Addleave