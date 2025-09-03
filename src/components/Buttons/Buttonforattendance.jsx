import React from 'react'
import Attendanceviewphoto from './Attendanceviewphoto'

const Buttonforattendance = () => {
  return (
    <div>
        <button className="btn btn-primary btn-sm" onClick={()=>document.getElementById('my_modal_1').showModal()}>View</button>
            <dialog id="my_modal_1" className="modal">

                <div className="modal-box max-w-5xl ">
                    <div className="flex flex-col justify-center items-center">
                        <div>
                            <h3 className="font-bold text-xl">Attendance Summary</h3>
                        </div>

                            <div className='flex flex-col sm:flex-row justify-between items-center  mt-4'>
                                <div className='bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[400px] sm:w-[450px] w-[350px] p-4 overflow-x-auto flex justify-center items-center '>
                                    {/* dito ilalagay yung mga information ng employee */}
                                    <div className='flex flex-col justify-center items-center gap-4 '>
                                        <div className='bg-white w-[190px] h-[200px] text-center flex justify-center items-center border border-gray-300'>
                                            Image here
                                        </div>
                                        <div className='font-bold text-lg mb-1'>
                                            Employee Name: John Doe
                                        </div>
                                        <div className=''>
                                            Employee ID: 123456
                                        </div>
                                        <div>
                                            Client ID: CLI001
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='bg-gray-200 dark:bg-gray-900 dark:text-white mt-5 mx-6 mb-1.5 sm:mb-3 rounded-lg h-[400px] sm:w-[450px] w-[350px] p-4 overflow-x-auto'>
                                    <table className='table table-zebra w-full table-auto border-collapse '>
                                        <thead className='text-center'>
                                            <tr>
                                                <th></th>
                                                <th>Time in</th>
                                                <th>Time out</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-center'>
                                            <tr>
                                                <td>1</td>
                                                <td>8:00 AM</td>
                                                <td>5:00 PM</td>
                                                <td><Attendanceviewphoto/></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>8:00 AM</td>
                                                <td>5:00 PM</td>
                                                <td><Attendanceviewphoto/></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>8:00 AM</td>
                                                <td>5:00 PM</td>
                                                <td><Attendanceviewphoto/></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>8:00 AM</td>
                                                <td>5:00 PM</td>
                                                <td><Attendanceviewphoto/></td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>8:00 AM</td>
                                                <td>5:00 PM</td>
                                                <td><Attendanceviewphoto/></td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>8:00 AM</td>
                                                <td>5:00 PM</td>
                                                <td><Attendanceviewphoto/></td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>8:00 AM</td>
                                                <td>5:00 PM</td>
                                                <td><Attendanceviewphoto/></td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>8:00 AM</td>
                                                <td>5:00 PM</td>
                                                <td><Attendanceviewphoto/></td>
                                            </tr>
                                            <tr>
                                                <td>9</td>
                                                <td>8:00 AM</td>
                                                <td>5:00 PM</td>
                                                <td><Attendanceviewphoto/></td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>8:00 AM</td>
                                                <td>5:00 PM</td>
                                                <td><Attendanceviewphoto/></td>
                                            </tr>
                                            <tr>
                                                <td>11</td>
                                                <td>8:00 AM</td>
                                                <td>5:00 PM</td>
                                                <td><Attendanceviewphoto/></td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>8:00 AM</td>
                                                <td>5:00 PM</td>
                                                <td><Attendanceviewphoto/></td>
                                            </tr>
                                            <tr>
                                                <td>13</td>
                                                <td>8:00 AM</td>
                                                <td>5:00 PM</td>
                                                <td><Attendanceviewphoto/></td>
                                            </tr>
                                            <tr>
                                                <td>14</td>
                                                <td>8:00 AM</td>
                                                <td>5:00 PM</td>
                                                <td><Attendanceviewphoto/></td>
                                            </tr>
                                            <tr>
                                                <td>15</td>
                                                <td>8:00 AM</td>
                                                <td>5:00 PM</td>
                                                <td><Attendanceviewphoto/></td>
                                            </tr>
                                        </tbody>
                                    </table>
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