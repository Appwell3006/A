import React from 'react'
import ButtonforManageHoliday from './Buttons/ButtonforManageHoliday'

const TablePayrollManageHoliday = () => {
  return (
    <div>
        <table className='table table-zebra w-full table-auto border-collapse '>
                <thead className='text-center'>
                    <tr>
                        <th> </th>
                        <th className='p-2'>Client Code</th>
                        <th className='p-2'>Name of Holiday</th>
                        <th className='p-2'>type of Holiday</th>
                        <th className='p-2'>Dates</th>
                        <th className='p-2'>Updated by</th>
                        <th className='p-2'>Action</th>
                    </tr>
                </thead>

                <tbody className='text-center'>
                    <tr>
                        <td className='p-2'>1</td>
                        <td className='p-2'>CL001</td>
                        <td className='p-2'>New Year</td>
                        <td className='p-2'>Regular Holiday</td>
                        <td className='p-2'>2023-01-01</td>
                        <td className='p-2'>Admin</td>
                        <td className='p-2'><ButtonforManageHoliday /></td>
                    </tr>
                    <tr>
                        <td className='p-2'>2</td>
                        <td className='p-2'>CL002</td>
                        <td className='p-2'>Independence Day</td>
                        <td className='p-2'>Special Holiday</td>
                        <td className='p-2'>2023-06-12</td>
                        <td className='p-2'>Finance</td>
                        <td className='p-2'><ButtonforManageHoliday /></td>
                    </tr>
                    <tr>
                        <td className='p-2'>3</td>
                        <td className='p-2'>CL001</td>
                        <td className='p-2'>New Year</td>
                        <td className='p-2'>Regular Holiday</td>
                        <td className='p-2'>2023-01-01</td>
                        <td className='p-2'>Admin</td>
                        <td className='p-2'><ButtonforManageHoliday /></td>
                    </tr>
                    <tr>
                        <td className='p-2'>4</td>
                        <td className='p-2'>CL002</td>
                        <td className='p-2'>Independence Day</td>
                        <td className='p-2'>Special Holiday</td>
                        <td className='p-2'>2023-06-12</td>
                        <td className='p-2'>Finance</td>
                        <td className='p-2'><ButtonforManageHoliday /></td>
                    </tr>
                    <tr>
                        <td className='p-2'>5</td>
                        <td className='p-2'>CL001</td>
                        <td className='p-2'>New Year</td>
                        <td className='p-2'>Regular Holiday</td>
                        <td className='p-2'>2023-01-01</td>
                        <td className='p-2'>Admin</td>
                        <td className='p-2'><ButtonforManageHoliday /></td>
                    </tr>
                    <tr>
                        <td className='p-2'>6</td>
                        <td className='p-2'>CL002</td>
                        <td className='p-2'>Independence Day</td>
                        <td className='p-2'>Special Holiday</td>
                        <td className='p-2'>2023-06-12</td>
                        <td className='p-2'>Finance</td>
                        <td className='p-2'><ButtonforManageHoliday /></td>
                    </tr>
                    <tr>
                        <td className='p-2'>7</td>
                        <td className='p-2'>CL001</td>
                        <td className='p-2'>New Year</td>
                        <td className='p-2'>Regular Holiday</td>
                        <td className='p-2'>2023-01-01</td>
                        <td className='p-2'>Admin</td>
                        <td className='p-2'><ButtonforManageHoliday /></td>
                    </tr>
                    <tr>
                        <td className='p-2'>8</td>
                        <td className='p-2'>CL002</td>
                        <td className='p-2'>Independence Day</td>
                        <td className='p-2'>Special Holiday</td>
                        <td className='p-2'>2023-06-12</td>
                        <td className='p-2'>Finance</td>
                        <td className='p-2'><ButtonforManageHoliday /></td>
                    </tr>
                    <tr>
                        <td className='p-2'>9</td>
                        <td className='p-2'>CL001</td>
                        <td className='p-2'>New Year</td>
                        <td className='p-2'>Regular Holiday</td>
                        <td className='p-2'>2023-01-01</td>
                        <td className='p-2'>Admin</td>
                        <td className='p-2'><ButtonforManageHoliday /></td>
                    </tr>
                    <tr>
                        <td className='p-2'>10</td>
                        <td className='p-2'>CL002</td>
                        <td className='p-2'>Independence Day</td>
                        <td className='p-2'>Special Holiday</td>
                        <td className='p-2'>2023-06-12</td>
                        <td className='p-2'>Finance</td>
                        <td className='p-2'><ButtonforManageHoliday /></td>
                    </tr>
                </tbody>
        </table>
    </div>
  )
}

export default TablePayrollManageHoliday