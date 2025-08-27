import React from 'react'

const Buttonforattendance = () => {
  return (
    <div>
        <button className="btn btn-primary btn-sm" onClick={()=>document.getElementById('my_modal_1').showModal()}>Summary</button>
            <dialog id="my_modal_1" className="modal">

                <div className="modal-box max-w-5xl ">
                    <div className="flex flex-col justify-center items-center">
                        <div>
                            <h3 className="font-bold text-xl">Attendance Summary</h3>
                        </div>
                            <div className='flex flex-col sm:flex-row justify-between items-center  mt-4'>
                                <div className='bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[400px] w-[450px] p-4 overflow-x-auto'>
                                    {/* dito ilalagay yung mga information ng employee */}
                                </div>
                                <div className='bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[400px] w-[450px] p-4 overflow-x-auto'>
                                    {/* dito ilalagay yung mga time in and time out excat time to be display ng employee */}
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

export default Buttonforattendance