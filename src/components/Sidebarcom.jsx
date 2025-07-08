import React from 'react'
import {Link} from "react-router-dom"

const Sidebarcom = () => {
  
  return (
    <div>
        <ul className="menu rounded-box w-full bg-gray-200 dark:bg-gray-900 dark:text-white">
            <li><a>Item 1</a></li>
                <li>
                <details open>
                <summary>Parent</summary>
                    <ul>
                        <Link to="/Home"><li><a>Home</a></li></Link>
                        <li><a>Submenu 2</a></li>
                        <li>
                            <details open>
                                <summary>Parent</summary>
                                <ul>
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                    </details>
                </li>
                <li><a>Item 3</a></li>
        </ul>
    </div>
  )
}

export default Sidebarcom