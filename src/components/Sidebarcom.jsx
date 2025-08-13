import React from 'react'
import {Link} from "react-router-dom"

const Sidebarcom = ({onItemClick}) => {

  
  return (
    <div>
        <ul className="menu rounded-box w-full bg-gray-200 dark:bg-gray-900 dark:text-white">
            <div className="divider">MENU</div>
            {/*Dasboard menu */}
            <li><Link to ="/Dashboard" onClick={onItemClick}><a className='font-bold'>Dashboard</a></Link></li>

            {/*Finance menu */}
                <li>
                    <details close>
                    <summary className='font-bold'>Finance</summary>
                        <ul>
                            <li>
                                {/*Payroll sub menu */}
                                    <details close>
                                        <summary >Payroll</summary>
                                        <ul>
                                        <li><Link to ="/Payslip" onClick={onItemClick}><a>Payslip</a></Link></li>
                                        <li><Link to="/Deduction" onClick={onItemClick}><a>Deductions</a></Link></li>
                                        <li><Link to="/Allowance" onClick={onItemClick}><a>Allowance</a></Link></li>
                                        <li><Link to="/Summary" onClick={onItemClick}><a>Summary</a></Link></li>
                                        </ul>
                                    </details>
                                {/*Leave sub menu */}
                                    <details close>
                                        <summary>Leave</summary>
                                        <ul>
                                        <li><Link to="/AddLeave" onClick={onItemClick}><a>Add Leave</a></Link></li>
                                        <li><Link to="/ManageLeave" onClick={onItemClick}><a>Manage Leave</a></Link></li>
                                        </ul>
                                    </details>
                                {/*Holiday sub menu */}
                                    <details close>
                                        <summary>Holiday</summary>
                                        <ul>
                                        <li><Link to="/AddHoliday" onClick={onItemClick}><a>Add Holiday</a></Link></li>
                                        <li><Link to="/ManageHoliday" onClick={onItemClick}><a>Manage Holiday</a></Link></li>
                                        </ul>
                                    </details>
                            </li>
                        </ul>
                    </details>
                </li>
            {/*Atendance menu */}
                <li><Link to ="/Attendance" onClick={onItemClick}><a className='font-bold'>Attendance</a></Link></li>

            {/*User Management menu */}
                <li>
                    <details close>
                    <summary className='font-bold'>User Management</summary>
                        <ul>
                            <li>
                                {/*Employee sub menu */}
                                    <details close>
                                        <summary>Employee</summary>
                                        <ul>
                                            <li><Link to="/AddEmployee" onClick={onItemClick}><a>Add Employee</a></Link></li>
                                            <li><Link to="/ManageEmployee" onClick={onItemClick}><a>Manage Employee</a></Link></li>
                                        </ul>
                                    </details>
                                {/*Manager sub menu */}
                                    <details close>
                                        <summary>Client</summary>
                                        <ul>
                                            <li><Link to="/AddClient" onClick={onItemClick}><a>Add Client</a></Link></li>
                                            <li><Link to="/ManageClient" onClick={onItemClick}><a>Manage Client</a></Link></li>
                                        </ul>
                                    </details>
                                {/*Client sub menu */}
                                    <details close>
                                        <summary>Manager</summary>
                                            <ul>
                                                <li><Link to="/AddManager" onClick={onItemClick}><a>Add Manager</a></Link></li>
                                                <li><Link to="/ManageManager" onClick={onItemClick}><a>Manage Manager</a></Link></li>
                                            </ul>
                                    </details>
                            </li>
                        </ul>

                    </details>
                </li>
            {/*Setting menu */}
                <li>
                    <details close>
                    <summary className='font-bold'>Setting</summary>
                        <ul>
                            <li><Link to="/ActivityLog" onClick={onItemClick}><a>Activity Log</a></Link></li>
                            <li><Link to="/Reports" onClick={onItemClick}><a>Reports</a></Link></li>
                            <li><Link to="/Backups" onClick={onItemClick}><a>Backup</a></Link></li>
                            <li><Link to="/Contact" onClick={onItemClick}><a>Contact</a></Link></li>
                        </ul>

                    </details>
                </li>
            {/*Log Out menu */}
                <li><a className='font-bold'>Log Out</a></li>
        </ul>
    </div>
  )
}

export default Sidebarcom