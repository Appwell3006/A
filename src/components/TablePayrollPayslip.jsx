import React from 'react'

const TablePayroll = () => {
  return (
    <div>
        <table className='table table-zebra w-full table-auto border-collapse '>
                <thead className='text-center'>
                    <tr>
                        <th> </th>
                        <th className='p-2'>Employee Number</th>
                        <th className='p-2'>Employee Name</th>
                        <th className='p-2'>Client Code</th>
                        <th className='p-2'>Payslip</th>
                    </tr>
                </thead>

                <tbody className='text-center'> 
                    <tr>
                        <td className='p-2'>1</td>
                        <td className='p-2'>EMP001</td>
                        <td className='p-2'>John Doe</td>
                        <td className='p-2'>CL001</td>
                        <td className='p-2'><button className='btn btn-primary'>View Payslip</button></td>
                    </tr>
                    <tr>
                        <td className='p-2'>2</td>
                        <td className='p-2'>EMP002</td>
                        <td className='p-2'>Jane Smith</td>
                        <td className='p-2'>CL002</td>
                        <td className='p-2'><button className='btn btn-primary'>View Payslip</button></td>
                    </tr>
                    <tr>
                        <td className='p-2'>3</td>
                        <td className='p-2'>EMP003</td>
                        <td className='p-2'>Alice Johnson</td>
                        <td className='p-2'>CL003</td>
                        <td className='p-2'><button className='btn btn-primary'>View Payslip</button></td>
                    </tr>
                    <tr>
                        <td className='p-2'>4</td>
                        <td className='p-2'>EMP004</td>
                        <td className='p-2'>Bob Brown</td>
                        <td className='p-2'>CL004</td>
                        <td className='p-2'><button className='btn btn-primary'>View Payslip</button></td>
                    </tr>
                    <tr>
                        <td className='p-2'>5</td>
                        <td className='p-2'>EMP005</td>
                        <td className='p-2'>Charlie Green</td>
                        <td className='p-2'>CL005</td>
                        <td className='p-2'><button className='btn btn-primary'>View Payslip</button></td>
                    </tr>
                    <tr>
                        <td className='p-2'>6</td>
                        <td className='p-2'>EMP001</td>
                        <td className='p-2'>John Doe</td>
                        <td className='p-2'>CL001</td>
                        <td className='p-2'><button className='btn btn-primary'>View Payslip</button></td>
                    </tr>
                    <tr>
                        <td className='p-2'>7</td>
                        <td className='p-2'>EMP002</td>
                        <td className='p-2'>Jane Smith</td>
                        <td className='p-2'>CL002</td>
                        <td className='p-2'><button className='btn btn-primary'>View Payslip</button></td>
                    </tr>
                    <tr>
                        <td className='p-2'>8</td>
                        <td className='p-2'>EMP003</td>
                        <td className='p-2'>Alice Johnson</td>
                        <td className='p-2'>CL003</td>
                        <td className='p-2'><button className='btn btn-primary'>View Payslip</button></td>
                    </tr>
                    <tr>
                        <td className='p-2'>9</td>
                        <td className='p-2'>EMP004</td>
                        <td className='p-2'>Bob Brown</td>
                        <td className='p-2'>CL004</td>
                        <td className='p-2'><button className='btn btn-primary'>View Payslip</button></td>
                    </tr>
                    <tr>
                        <td className='p-2'>10</td>
                        <td className='p-2'>EMP005</td>
                        <td className='p-2'>Charlie Green</td>
                        <td className='p-2'>CL005</td>
                        <td className='p-2'><button className='btn btn-primary'>View Payslip</button></td>
                    </tr>
                </tbody>
                

            </table>
    </div>
  )
}

export default TablePayroll