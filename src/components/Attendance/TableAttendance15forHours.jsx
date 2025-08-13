import React from 'react'

const TableAttendance15forHours = ({ searchTerm = '' }) => {
  // Sample data for filtering
  const employees = [
    { id: 1, empCode: 'EMP001', name: 'John Doe', clientCode: 'CL001' },
    { id: 2, empCode: 'EMP002', name: 'Jane Smith', clientCode: 'CL002' },
    { id: 3, empCode: 'EMP003', name: 'Michael Johnson', clientCode: 'CL001' },
    { id: 4, empCode: 'EMP004', name: 'Sarah Williams', clientCode: 'CL003' },
    { id: 5, empCode: 'EMP005', name: 'David Brown', clientCode: 'CL002' },
    { id: 6, empCode: 'EMP006', name: 'Emily Davis', clientCode: 'CL001' },
    { id: 7, empCode: 'EMP007', name: 'Robert Miller', clientCode: 'CL003' },
    { id: 8, empCode: 'EMP008', name: 'Lisa Wilson', clientCode: 'CL002' },
    { id: 9, empCode: 'EMP009', name: 'Christopher Moore', clientCode: 'CL001' },
    { id: 10, empCode: 'EMP010', name: 'Amanda Taylor', clientCode: 'CL003' },
    { id: 11, empCode: 'EMP011', name: 'Kevin Anderson', clientCode: 'CL002' },
    { id: 12, empCode: 'EMP012', name: 'Michelle Thomas', clientCode: 'CL001' },
    { id: 13, empCode: 'EMP013', name: 'Daniel Jackson', clientCode: 'CL003' },
    { id: 14, empCode: 'EMP014', name: 'Nicole White', clientCode: 'CL002' },
    { id: 15, empCode: 'EMP015', name: 'Brian Harris', clientCode: 'CL001' }
  ]

  // Time schedules for each employee
  const timeSchedules = {
    1: ['8:00 AM - 5:00 PM', '8:30 AM - 5:30 PM', '7:45 AM - 4:45 PM', '9:00 AM - 6:00 PM', '8:15 AM - 5:15 PM', '8:00 AM - 5:00 PM', '7:30 AM - 4:30 PM', '8:45 AM - 5:45 PM', '8:30 AM - 5:30 PM', '8:00 AM - 5:00 PM', '9:15 AM - 6:15 PM', '7:45 AM - 4:45 PM', '8:30 AM - 5:30 PM', '8:00 AM - 5:00 PM', '8:15 AM - 5:15 PM'],
    2: ['9:00 AM - 6:00 PM', '8:45 AM - 5:45 PM', '9:30 AM - 6:30 PM', '8:30 AM - 5:30 PM', '9:00 AM - 6:00 PM', '8:15 AM - 5:15 PM', '9:15 AM - 6:15 PM', '8:00 AM - 5:00 PM', '9:30 AM - 6:30 PM', '8:45 AM - 5:45 PM', '9:00 AM - 6:00 PM', '8:30 AM - 5:30 PM', '9:15 AM - 6:15 PM', '8:15 AM - 5:15 PM', '9:00 AM - 6:00 PM'],
    3: ['7:30 AM - 4:30 PM', '8:00 AM - 5:00 PM', '7:45 AM - 4:45 PM', '8:30 AM - 5:30 PM', '7:30 AM - 4:30 PM', '8:15 AM - 5:15 PM', '7:45 AM - 4:45 PM', '8:00 AM - 5:00 PM', '7:30 AM - 4:30 PM', '8:30 AM - 5:30 PM', '7:45 AM - 4:45 PM', '8:15 AM - 5:15 PM', '7:30 AM - 4:30 PM', '8:00 AM - 5:00 PM', '7:45 AM - 4:45 PM'],
    4: ['8:45 AM - 5:45 PM', '9:15 AM - 6:15 PM', '8:30 AM - 5:30 PM', '8:00 AM - 5:00 PM', '9:00 AM - 6:00 PM', '8:45 AM - 5:45 PM', '8:15 AM - 5:15 PM', '9:30 AM - 6:30 PM', '8:30 AM - 5:30 PM', '8:00 AM - 5:00 PM', '9:15 AM - 6:15 PM', '8:45 AM - 5:45 PM', '8:30 AM - 5:30 PM', '9:00 AM - 6:00 PM', '8:15 AM - 5:15 PM'],
    5: ['8:15 AM - 5:15 PM', '7:45 AM - 4:45 PM', '8:00 AM - 5:00 PM', '8:30 AM - 5:30 PM', '8:45 AM - 5:45 PM', '8:00 AM - 5:00 PM', '8:30 AM - 5:30 PM', '7:30 AM - 4:30 PM', '8:15 AM - 5:15 PM', '8:45 AM - 5:45 PM', '8:00 AM - 5:00 PM', '8:30 AM - 5:30 PM', '7:45 AM - 4:45 PM', '8:15 AM - 5:15 PM', '8:00 AM - 5:00 PM'],
    6: ['9:30 AM - 6:30 PM', '9:00 AM - 6:00 PM', '9:15 AM - 6:15 PM', '8:45 AM - 5:45 PM', '9:30 AM - 6:30 PM', '9:00 AM - 6:00 PM', '8:30 AM - 5:30 PM', '9:15 AM - 6:15 PM', '9:00 AM - 6:00 PM', '8:45 AM - 5:45 PM', '9:30 AM - 6:30 PM', '9:00 AM - 6:00 PM', '8:30 AM - 5:30 PM', '9:15 AM - 6:15 PM', '8:45 AM - 5:45 PM'],
    7: ['7:45 AM - 4:45 PM', '8:30 AM - 5:30 PM', '8:00 AM - 5:00 PM', '7:30 AM - 4:30 PM', '8:15 AM - 5:15 PM', '7:45 AM - 4:45 PM', '8:00 AM - 5:00 PM', '8:30 AM - 5:30 PM', '7:30 AM - 4:30 PM', '8:15 AM - 5:15 PM', '7:45 AM - 4:45 PM', '8:00 AM - 5:00 PM', '8:30 AM - 5:30 PM', '7:30 AM - 4:30 PM', '8:15 AM - 5:15 PM'],
    8: ['8:30 AM - 5:30 PM', '8:00 AM - 5:00 PM', '8:45 AM - 5:45 PM', '9:15 AM - 6:15 PM', '8:30 AM - 5:30 PM', '8:00 AM - 5:00 PM', '9:00 AM - 6:00 PM', '8:45 AM - 5:45 PM', '8:15 AM - 5:15 PM', '8:30 AM - 5:30 PM', '8:00 AM - 5:00 PM', '9:15 AM - 6:15 PM', '8:45 AM - 5:45 PM', '8:30 AM - 5:30 PM', '8:00 AM - 5:00 PM'],
    9: ['8:00 AM - 5:00 PM', '8:15 AM - 5:15 PM', '7:45 AM - 4:45 PM', '8:30 AM - 5:30 PM', '8:00 AM - 5:00 PM', '8:45 AM - 5:45 PM', '8:15 AM - 5:15 PM', '8:00 AM - 5:00 PM', '7:30 AM - 4:30 PM', '8:30 AM - 5:30 PM', '8:15 AM - 5:15 PM', '8:00 AM - 5:00 PM', '8:45 AM - 5:45 PM', '7:45 AM - 4:45 PM', '8:30 AM - 5:30 PM'],
    10: ['9:00 AM - 6:00 PM', '8:30 AM - 5:30 PM', '9:15 AM - 6:15 PM', '8:45 AM - 5:45 PM', '9:30 AM - 6:30 PM', '9:00 AM - 6:00 PM', '8:15 AM - 5:15 PM', '9:15 AM - 6:15 PM', '8:30 AM - 5:30 PM', '9:00 AM - 6:00 PM', '8:45 AM - 5:45 PM', '9:30 AM - 6:30 PM', '8:30 AM - 5:30 PM', '9:00 AM - 6:00 PM', '8:15 AM - 5:15 PM'],
    11: ['7:30 AM - 4:30 PM', '8:00 AM - 5:00 PM', '7:45 AM - 4:45 PM', '8:15 AM - 5:15 PM', '7:30 AM - 4:30 PM', '8:30 AM - 5:30 PM', '7:45 AM - 4:45 PM', '8:00 AM - 5:00 PM', '8:15 AM - 5:15 PM', '7:30 AM - 4:30 PM', '8:00 AM - 5:00 PM', '7:45 AM - 4:45 PM', '8:30 AM - 5:30 PM', '8:15 AM - 5:15 PM', '7:30 AM - 4:30 PM'],
    12: ['8:45 AM - 5:45 PM', '9:00 AM - 6:00 PM', '8:30 AM - 5:30 PM', '8:15 AM - 5:15 PM', '8:45 AM - 5:45 PM', '9:15 AM - 6:15 PM', '8:30 AM - 5:30 PM', '8:00 AM - 5:00 PM', '9:00 AM - 6:00 PM', '8:45 AM - 5:45 PM', '8:15 AM - 5:15 PM', '8:30 AM - 5:30 PM', '9:15 AM - 6:15 PM', '8:45 AM - 5:45 PM', '8:00 AM - 5:00 PM'],
    13: ['8:15 AM - 5:15 PM', '7:45 AM - 4:45 PM', '8:00 AM - 5:00 PM', '8:30 AM - 5:30 PM', '8:15 AM - 5:15 PM', '8:00 AM - 5:00 PM', '7:45 AM - 4:45 PM', '8:30 AM - 5:30 PM', '8:45 AM - 5:45 PM', '8:15 AM - 5:15 PM', '8:00 AM - 5:00 PM', '7:30 AM - 4:30 PM', '8:30 AM - 5:30 PM', '8:15 AM - 5:15 PM', '8:00 AM - 5:00 PM'],
    14: ['9:15 AM - 6:15 PM', '8:45 AM - 5:45 PM', '9:30 AM - 6:30 PM', '9:00 AM - 6:00 PM', '8:30 AM - 5:30 PM', '9:15 AM - 6:15 PM', '8:45 AM - 5:45 PM', '9:30 AM - 6:30 PM', '9:00 AM - 6:00 PM', '8:15 AM - 5:15 PM', '9:15 AM - 6:15 PM', '8:45 AM - 5:45 PM', '9:00 AM - 6:00 PM', '8:30 AM - 5:30 PM', '9:15 AM - 6:15 PM'],
    15: ['7:45 AM - 4:45 PM', '8:30 AM - 5:30 PM', '8:00 AM - 5:00 PM', '7:30 AM - 4:30 PM', '8:45 AM - 5:45 PM', '7:45 AM - 4:45 PM', '8:15 AM - 5:15 PM', '8:00 AM - 5:00 PM', '7:30 AM - 4:30 PM', '8:30 AM - 5:30 PM', '8:45 AM - 5:45 PM', '7:45 AM - 4:45 PM', '8:15 AM - 5:15 PM', '8:00 AM - 5:00 PM', '7:30 AM - 4:30 PM']
  }

  // Filter employees based on search term
  const filteredEmployees = employees.filter(emp => {
    if (!searchTerm) return true
    const searchLower = searchTerm.toLowerCase()
    return emp.empCode.toLowerCase().includes(searchLower) || 
           emp.clientCode.toLowerCase().includes(searchLower) ||
           emp.name.toLowerCase().includes(searchLower)
  })

  return (
    <div>
        <table className='table table-zebra w-full table-auto border-collapse '>
                <thead className='text-center'>
                    <tr>
                        <th> </th>
                        <th className='p-2'>Employee Number</th>
                        <th className='p-2'>Employee Name</th>
                        <th className='p-2'>Client Code</th>
                        <th className='px-20'>1</th>
                        <th className='px-20'>2</th>
                        <th className='px-20'>3</th>
                        <th className='px-20'>4</th>
                        <th className='px-20'>5</th>
                        <th className='px-20'>6</th>
                        <th className='px-20'>7</th>
                        <th className='px-20'>8</th>
                        <th className='px-20'>9</th>
                        <th className='px-20'>10</th>
                        <th className='px-20'>11</th>
                        <th className='px-20'>12</th>
                        <th className='px-20'>13</th>
                        <th className='px-20'>14</th>
                        <th className='px-20'>15</th>                                             
                    </tr>
                </thead>
                <tbody>
                    {filteredEmployees.map((emp, index) => (
                        <tr key={emp.id}>
                            <td className='p-2'>{index + 1}</td>
                            <td className='p-2'>{emp.empCode}</td>
                            <td className='p-2'>{emp.name}</td>
                            <td className='p-2'>{emp.clientCode}</td>
                            {timeSchedules[emp.id].map((time, dayIndex) => (
                                <td key={dayIndex} className='p-2'>{time}</td>
                            ))}
                        </tr>
                    ))}
                    {filteredEmployees.length === 0 && searchTerm && (
                        <tr>
                            <td colSpan="19" className="p-4 text-center text-gray-500">
                                No employees found matching "{searchTerm}"
                            </td>
                        </tr>
                    )}
                </tbody>
        </table>
    </div>
  )
}

export default TableAttendance15forHours