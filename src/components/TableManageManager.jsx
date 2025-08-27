import React from 'react'
import ButtonformanagerEdit from './Buttons/Mnager Button/ButtonformanagerEdit'
import ButtonformanagerDelete from './Buttons/Mnager Button/ButtonformanagerDelete'

const TableManageManager = () => {
  return (
    <div>
        <table className='table table-zebra w-full table-auto border-collapse'>
            <thead className='text-center'>
                <tr>
                    <th> </th>
                    <th className='p-2'>User Name</th>
                    <th className='p-2'>Position</th>
                    <th className='p-2'>Action</th>
                </tr>
            </thead>

            <tbody className='text-center'>
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>Manager</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonformanagerEdit />
                        <ButtonformanagerDelete />
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jane Smith</td>
                    <td>Senior Manager</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonformanagerEdit />
                        <ButtonformanagerDelete />
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Mike Johnson</td>
                    <td>Finance</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonformanagerEdit />
                        <ButtonformanagerDelete />
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Emily Davis</td>
                    <td>Manager</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonformanagerEdit />
                        <ButtonformanagerDelete />
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>David Wilson</td>
                    <td>Director</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonformanagerEdit />
                        <ButtonformanagerDelete />
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Sarah Brown</td>
                    <td>Manager</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonformanagerEdit />
                        <ButtonformanagerDelete />
                    </td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Chris Green</td>
                    <td>Senior Manager</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonformanagerEdit />
                        <ButtonformanagerDelete />
                    </td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Alice White</td>
                    <td>Finance</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonformanagerEdit />
                        <ButtonformanagerDelete />
                    </td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Tom Black</td>
                    <td>Manager</td>
                    <td className='p-2 flex flex-row justify-center gap-1.5'>
                        <ButtonformanagerEdit />
                        <ButtonformanagerDelete />
                    </td>
                </tr>

            </tbody>

        </table>

    </div>
  )
}

export default TableManageManager