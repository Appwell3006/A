import React from 'react'
import ButtonforemployeeEdit from './Buttons/Employee button/ButtonforemployeeEdit'
import ButtonforemployeeDelete from './Buttons/Employee button/ButtonforemployeeDelete'

const TableManageEmployee = () => {
  return (
    <div>
        <table className='table table-zebra w-full table-auto border-collapse'>
            <thead className='text-center'>
                <tr>
                    <th> </th>
                    <th className='p-2'>Employee Number</th>
                    <th className='p-2'>Employee Name</th>
                    <th className='p-2'>Client Code</th>
                    <th className='p-2'>Action</th>
                </tr>
            </thead>

            <tbody className='text-center'>
                <tr>
                    <td className='p-2'>1</td>
                    <td className='p-2'>EMP001</td>
                    <td className='p-2'>John Doe</td>
                    <td className='p-2'>CL001</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonforemployeeEdit />
                        <ButtonforemployeeDelete />
                    </td>
                </tr>
                <tr>
                    <td className='p-2'>2</td>
                    <td className='p-2'>EMP002</td>
                    <td className='p-2'>Jane Smith</td>
                    <td className='p-2'>CL002</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonforemployeeEdit />
                        <ButtonforemployeeDelete />
                    </td>
                </tr>
                <tr>
                    <td className='p-2'>3</td>
                    <td className='p-2'>EMP001</td>
                    <td className='p-2'>John Doe</td>
                    <td className='p-2'>CL001</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonforemployeeEdit />
                        <ButtonforemployeeDelete />
                    </td>
                </tr>
                <tr>
                    <td className='p-2'>4</td>
                    <td className='p-2'>EMP002</td>
                    <td className='p-2'>Jane Smith</td>
                    <td className='p-2'>CL002</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonforemployeeEdit />
                        <ButtonforemployeeDelete />
                    </td>
                </tr>
                <tr>
                    <td className='p-2'>5</td>
                    <td className='p-2'>EMP001</td>
                    <td className='p-2'>John Doe</td>
                    <td className='p-2'>CL001</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonforemployeeEdit />
                        <ButtonforemployeeDelete />
                    </td>
                </tr>
                <tr>
                    <td className='p-2'>6</td>
                    <td className='p-2'>EMP002</td>
                    <td className='p-2'>Jane Smith</td>
                    <td className='p-2'>CL002</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonforemployeeEdit />
                        <ButtonforemployeeDelete />
                    </td>
                </tr>
                <tr>
                    <td className='p-2'>7</td>
                    <td className='p-2'>EMP001</td>
                    <td className='p-2'>John Doe</td>
                    <td className='p-2'>CL001</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonforemployeeEdit />
                        <ButtonforemployeeDelete />
                    </td>
                </tr>
                <tr>
                    <td className='p-2'>8</td>
                    <td className='p-2'>EMP002</td>
                    <td className='p-2'>Jane Smith</td>
                    <td className='p-2'>CL002</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonforemployeeEdit />
                        <ButtonforemployeeDelete />
                    </td>
                </tr>
                <tr>
                    <td className='p-2'>9</td>
                    <td className='p-2'>EMP001</td>
                    <td className='p-2'>John Doe</td>
                    <td className='p-2'>CL001</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonforemployeeEdit />
                        <ButtonforemployeeDelete />
                    </td>
                </tr>
                <tr>
                    <td className='p-2'>10</td>
                    <td className='p-2'>EMP002</td>
                    <td className='p-2'>Jane Smith</td>
                    <td className='p-2'>CL002</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonforemployeeEdit />
                        <ButtonforemployeeDelete />
                    </td>
                </tr>
                <tr>
                    <td className='p-2'>11</td>
                    <td className='p-2'>EMP001</td>
                    <td className='p-2'>John Doe</td>
                    <td className='p-2'>CL001</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonforemployeeEdit />
                        <ButtonforemployeeDelete />
                    </td>
                </tr>
                <tr>
                    <td className='p-2'>12</td>
                    <td className='p-2'>EMP002</td>
                    <td className='p-2'>Jane Smith</td>
                    <td className='p-2'>CL002</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonforemployeeEdit />
                        <ButtonforemployeeDelete />
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
  )
}

export default TableManageEmployee