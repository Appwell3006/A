import React from 'react'

const Attendanceviewphoto = () => {
  return (
    <div>
        <button className="btn btn-primary btn-xs text-xs" onClick={()=>document.getElementById('my_modal_View_photo').showModal()}>View Photo</button>

        <dialog id="my_modal_View_photo" className="modal">

            <div className="modal-box max-w-2xl ">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <h3 className="font-bold text-xl">Image Preview</h3>
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-row justify-center gap-10 items-center  mt-4'>
                             {/* Time In */}
                             <div className='bg-gray-200 dark:bg-gray-900 dark:text-white rounded-lg sm:h-[250px] h-[200px] sm:w-[250px] w-[200px] p-4 overflow-x-auto flex flex-col justify-center items-center gap-2'>
                                <div className='bg-white w-[190px] h-[200px] text-center flex justify-center items-center border border-gray-300'>
                                            Image here
                                </div>
                                <div className='font-bold text-md mb-1'>
                                    Time In
                                </div>
                            </div>
                            {/* Time Out */}
                            <div className='bg-gray-200 dark:bg-gray-900 dark:text-white rounded-lg sm:h-[250px] h-[200px] sm:w-[250px] w-[200px] p-4 overflow-x-auto flex flex-col justify-center items-center gap-2'>
                                <div className='bg-white w-[190px] h-[200px] text-center flex justify-center items-center border border-gray-300'>
                                            Image here
                                </div>
                                <div className='font-bold text-md mb-1'>
                                    Time Out
                                </div>
                            </div>
                        </div>




                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
            </div>
        </dialog>
        

    </div>
  )
}

export default Attendanceviewphoto