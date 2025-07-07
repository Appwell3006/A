import React from 'react'
import Logo from '../assets/logo.png'
import { CircleUserRound, Menu } from 'lucide-react'
import {Link} from "react-router-dom"

const Navigationbar = () => {
  return (
    
    <div>
        {/*TOP NAV BAR FOR TITLE */}
        <div className="navbar shadow-sm bg-gray-200 dark:bg-gray-900 dark:text-white">

            {/* NAV BAR START*/}
            <div className='navbar-start flex items-center'>
                <img className='w-[40px] sm:w-[60px] ' src={Logo} alt="assero-logo" />
                <div>
                    <h1 className='font-bold text-lg ml-2 text-shadow-md sm:text-3xl'>Assero Global</h1>
                    <h2 className='text-gray-500 text-xs ml-1 sm:ml-0 sm:text-base dark:text-gray-300'>Payroll & Timekeeping System</h2>
                </div>
                
            </div>

            {/*NAV BAR END*/}
            <div className='navbar-end'>
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1 border-transparent bg-transparent shadow-none"><CircleUserRound size={30} strokeWidth={1.75} /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Profile</a></li>
                    <li><a>Setting</a></li>
                    <hr className='my-1.5'/>
                    <li><a className='font-bold'>Log out</a></li>
                    
                </ul>
                </div>
            </div>
        </div>

        {/*BOTTOM NAV BAR FOR MENU */}
        <div className="bg-gray-800 dark:bg-gray-500 flex">
            
            <div>
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button shadow-none bg-transparent border-transparent"><Menu color='white' size={30} strokeWidth={1.75} /></label>
                    </div>

                    <div className="drawer-side">

                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        
                        <ul className="menu text-base-content min-h-full w-80 p-4 bg-gray-200 dark:bg-gray-900 dark:text-white">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex gap-1.5'>
                <Link to="/Home"><a className="btn text-white text-md bg-transparent border-none">Home</a></Link>
                <Link to="/About"><a className="btn text-white text-md bg-transparent border-none">About</a></Link>
                <Link to="/Contact"><a className="btn text-white text-md bg-transparent border-none">Contact</a></Link>
                
            </div>
        </div>
    </div>
  )
}

export default Navigationbar