import React from 'react'

const TablePayrollManageLeave = () => {
  return (
    <div>
        <table className='table table-zebra w-full table-auto border-collapse '>
                <thead className='text-center'>
                    <tr>
                        <th> </th>
                        <th className='p-2'>Employee Number</th>
                        <th className='p-2'>Employee Name</th>
                        <th className='p-2'>Client Code</th>
                        <th className='p-2'>Leave type</th>
                        <th className='p-2'>Duration</th>
                        <th className='p-2'>Dates</th>
                        <th className='p-2'>Updated by</th>
                        <th className='p-2'>Action</th>
                    </tr>
                </thead>

                <tbody className='text-center'>
                    <tr>
                        <td className='p-2'>1</td>
                        <td className='p-2'>EMP001</td>
                        <td className='p-2'>John Doe</td>
                        <td className='p-2'>CL001</td>
                        <td className='p-2'>Sick Leave</td>
                        <td className='p-2'>3 days</td>
                        <td className='p-2'>2023-10-01 to 2023-10-03</td>
                        <td className='p-2'>Admin</td>
                        <td className='p-2'><button className='btn btn-primary'>Edit</button></td>
                    </tr>
                    <tr>
                        <td className='p-2'>2</td>
                        <td className='p-2'>EMP002</td>
                        <td className='p-2'>Jane Smith</td>
                        <td className='p-2'>CL002</td>
                        <td className='p-2'>Vacation Leave</td>
                        <td className='p-2'>5 days</td>
                        <td className='p-2'>2023-10-05 to 2023-10-09</td>
                        <td className='p-2'>Finance</td>
                        <td className='p-2'><button className='btn btn-primary'>Edit</button></td>
                    </tr>
                    <tr>
                        <td className='p-2'>3</td>
                        <td className='p-2'>EMP001</td>
                        <td className='p-2'>John Doe</td>
                        <td className='p-2'>CL001</td>
                        <td className='p-2'>Sick Leave</td>
                        <td className='p-2'>3 days</td>
                        <td className='p-2'>2023-10-01 to 2023-10-03</td>
                        <td className='p-2'>Admin</td>
                        <td className='p-2'><button className='btn btn-primary'>Edit</button></td>
                    </tr>
                    <tr>
                        <td className='p-2'>4</td>
                        <td className='p-2'>EMP002</td>
                        <td className='p-2'>Jane Smith</td>
                        <td className='p-2'>CL002</td>
                        <td className='p-2'>Vacation Leave</td>
                        <td className='p-2'>5 days</td>
                        <td className='p-2'>2023-10-05 to 2023-10-09</td>
                        <td className='p-2'>Admin</td>
                        <td className='p-2'><button className='btn btn-primary'>Edit</button></td>
                    </tr>
                    <tr>
                        <td className='p-2'>5</td>
                        <td className='p-2'>EMP001</td>
                        <td className='p-2'>John Doe</td>
                        <td className='p-2'>CL001</td>
                        <td className='p-2'>Sick Leave</td>
                        <td className='p-2'>3 days</td>
                        <td className='p-2'>2023-10-01 to 2023-10-03</td>
                        <td className='p-2'>Finance</td>
                        <td className='p-2'><button className='btn btn-primary'>Edit</button></td>
                    </tr>
                    <tr>
                        <td className='p-2'>6</td>
                        <td className='p-2'>EMP002</td>
                        <td className='p-2'>Jane Smith</td>
                        <td className='p-2'>CL002</td>
                        <td className='p-2'>Vacation Leave</td>
                        <td className='p-2'>5 days</td>
                        <td className='p-2'>2023-10-05 to 2023-10-09</td>
                        <td className='p-2'>Admin</td>
                        <td className='p-2'><button className='btn btn-primary'>Edit</button></td>
                    </tr>
                    <tr>
                        <td className='p-2'>7</td>
                        <td className='p-2'>EMP001</td>
                        <td className='p-2'>John Doe</td>
                        <td className='p-2'>CL001</td>
                        <td className='p-2'>Sick Leave</td>
                        <td className='p-2'>3 days</td>
                        <td className='p-2'>2023-10-01 to 2023-10-03</td>
                        <td className='p-2'>Admin</td>
                        <td className='p-2'><button className='btn btn-primary'>Edit</button></td>
                    </tr>
                    <tr>
                        <td className='p-2'>8</td>
                        <td className='p-2'>EMP002</td>
                        <td className='p-2'>Jane Smith</td>
                        <td className='p-2'>CL002</td>
                        <td className='p-2'>Vacation Leave</td>
                        <td className='p-2'>5 days</td>
                        <td className='p-2'>2023-10-05 to 2023-10-09</td>
                        <td className='p-2'>Finance</td>
                        <td className='p-2'><button className='btn btn-primary'>Edit</button></td>
                    </tr>

                </tbody>
        </table>
    </div>
  )
}

export default TablePayrollManageLeave