import React from 'react'
import ButtonforActivityLog from './Buttons/ButtonforActivityLog'


const TableforActivityLog = () => {
  return (
    <div>
        <table className='table table-zebra w-full table-auto border-collapse '>
                <thead className='text-center'>
                    <tr>
                        
                        <th className='p-2'>Timestamp</th>
                        <th className='p-2'>User Name or ID</th>
                        <th className='p-2'>Name</th>
                        <th className='p-2'>Action Type</th>
                        <th className='p-2'>Description</th>

                    </tr>
                </thead>

                <tbody className='text-center'>
                    <tr>
                        <td className='p-2'>2:40 PM</td>
                        <td className='p-2'>M2930</td>
                        <td className='p-2'>Jhon bro</td>
                        <td className='p-2'><ButtonforActivityLog /></td>
                        <td className='p-2'>Login</td>
                    </tr>
                    <tr>
                        <td className='p-2'>2:40 PM</td>
                        <td className='p-2'>M2930</td>
                        <td className='p-2'>Jhon bro</td>
                        <td className='p-2'><ButtonforActivityLog /></td>
                        <td className='p-2'>Login</td>
                    </tr>
                </tbody>
        </table>
    </div>
  )
}

export default TableforActivityLog