import React from 'react'
import {Link} from "react-router-dom"

const Sidebarcom = () => {
  
  return (
    <div>
        <ul className="menu rounded-box w-full bg-gray-200 dark:bg-gray-900 dark:text-white">
            <div className="divider">MENU</div>
            {/*Dasboard menu */}
            <li><Link to ="/Dashboard"><a className='font-bold'>Dashboard</a></Link></li>

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
                                        <li><Link to ="/Payslip"><a>Payslip</a></Link></li>
                                        <li><Link to="/Deduction"><a>Deductions</a></Link></li>
                                        <li><Link to="/Allowance"><a>Allowance</a></Link></li>
                                        <li><Link to="/Summary"><a>Summary</a></Link></li>
                                        </ul>
                                    </details>
                                {/*Leave sub menu */}
                                    <details close>
                                        <summary>Leave</summary>
                                        <ul>
                                        <li><Link to="/AddLeave"><a>Add Leave</a></Link></li>
                                        <li><a>Leave Type</a></li>
                                        <li><a>Manage Leave</a></li>
                                        </ul>
                                    </details>
                                {/*Holiday sub menu */}
                                    <details close>
                                        <summary>Holiday</summary>
                                        <ul>
                                        <li><a>Add Holiday</a></li>
                                        <li><a>Manage Holiday</a></li>
                                        </ul>
                                    </details>
                                {/*Tax sub menu */}
                                    <details close>
                                        <summary>Tax</summary>
                                        <ul>
                                        <li><a>Add Tax</a></li>
                                        <li><a>Manage Tax</a></li>
                                        </ul>
                                    </details>
                            </li>
                        </ul>
                    </details>
                </li>
            {/*Atendance menu */}
                <li><Link to ="/Attendance"><a className='font-bold'>Attendance</a></Link></li>

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
                                            <li><a>Add Employee</a></li>
                                            <li><a>Manage Employee</a></li>
                                        </ul>
                                    </details>
                                {/*Manager sub menu */}
                                    <details close>
                                        <summary>Client</summary>
                                        <ul>
                                            <li><a>Add Client</a></li>
                                            <li><a>Manage Client</a></li>
                                        </ul>
                                    </details>
                                {/*Client sub menu */}
                                    <details close>
                                        <summary>Employee</summary>
                                            <ul>
                                                <li><a>Add Client</a></li>
                                                <li><a>Manage Client</a></li>
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
                            <li><a>Actiity Log</a></li>
                            <li><a>Reports</a></li>
                            <li><a>Backup</a></li>
                            <li><a>Contact</a></li>
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