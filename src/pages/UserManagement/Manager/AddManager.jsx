import React from 'react'

const AddManager = () => {
  return (
    <div>
        {/* Header of Add Manager */}
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-0 rounded-lg h-[70px] p-2 flex flex-col justify-center items-start '>
            <div className='ml-2 sm:ml-5'>
                <h1 className='text-xl font-bold sm:text-2xl'>Add Manager</h1>
                <p className='text-gray-500 text-sm dark:text-gray-300 sm:text-md'>Welcome to Add Manager</p>
            </div>
        </div>

        {/* Main content of Add Manager */}
        <div className='shadow-lg bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[550px] p-4'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <div>
                    <label className="input w-[390px] sm:w-[500px]">
                        <span className="label">Surname:</span>
                        <input type="text" placeholder="Type Here" />
                    </label>
                </div>
                
                <div>
                    <label className="input w-[390px] sm:w-[500px]">
                        <span className="label">Given Name:</span>
                        <input type="text" placeholder="Type Here" />
                    </label>
                </div>

                <div>
                    <label className="input w-[390px] sm:w-[500px]">
                        <span className="label">Middle Name:</span>
                        <input type="text" placeholder="Type Here" />
                    </label>
                </div>
                
                <div>
                    <label className="input w-[390px] sm:w-[500px]">
                        <span className="label">Date of Birth:</span>
                        <input type="text" placeholder="Type Here" />
                    </label>
                </div>

                <div>
                    <label className="input w-[390px] sm:w-[500px]">
                        <span className="label">Place of Birth:</span>
                        <input type="text" placeholder="Type Here" />
                    </label>
                </div>

                <div className='flex flex-row sm:flex-row gap-2'>
                    <div>
                        <label className="input w-[245px]">
                            <span className="label">Height:</span>
                            <input type="text" placeholder="Type Here" />
                        </label>
                    </div>

                    <div>
                        <label className="input w-[245px]">
                            <span className="label">Weight:</span>
                            <input type="text" placeholder="Type Here" />
                        </label>
                    </div>
                </div>

                <div className='flex flex-row sm:flex-row gap-2'>
                    <div>
                        <label className="input w-[245px]">
                            <span className="label">Religion:</span>
                            <input type="text" placeholder="Type Here" />
                        </label>
                    </div>

                    <div>
                        <label className="input w-[245px]">
                            <span className="label">Sex:</span>
                            <input type="text" placeholder="Type Here" />
                        </label>
                    </div>
                </div>

                <div className='flex flex-row sm:flex-row gap-2'>
                    <div>
                        <label className="input w-[245px]">
                            <span className="label">Citizenship:</span>
                            <input type="text" placeholder="Type Here" />
                        </label>
                    </div>

                    <div>
                        <label className="input w-[245px]">
                            <span className="label">Civil Status:</span>
                            <input type="text" placeholder="Type Here" />
                        </label>
                    </div>
                </div>
                <div>
                    <label className="input w-[390px] sm:w-[500px]">
                        <span className="label">Personal Contact No.:</span>
                        <input type="text" placeholder="Type Here" />
                    </label>
                </div>
                <div>
                    <select defaultValue="Pick a color" className="select w-[500px] text-center">
                        <option disabled={true}>Pick a Position</option>
                        <option>Senior Manager</option>
                        <option>Manager</option>
                        <option>Finance</option>
                    </select>
                </div>
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

export default AddManager