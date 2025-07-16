import { useState } from 'react'
import './App.css'
import { Route, Routes, Link} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Navigationbar from './components/Navigationbar'
import Contact from './pages/Setting/Contact'
import Attendance from './pages/Attendance'
import Payslip from './pages/Finance/Payroll/Payslip'
import Deduction from './pages/Finance/Payroll/Deduction'
import Allowance from './pages/Finance/Payroll/Allowance'
import Summary from './pages/Finance/Payroll/Summary'
import Addleave from './pages/Finance/Leave/Addleave'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navigationbar />
    </div>
    <div>
      <div>
        <Routes>
          <Route index element={<Dashboard />} />

          {/* Dashboard Sidebar link*/}
          <Route path="/Dashboard" element={<Dashboard />} />

          {/* Finance Sidebar link */}
          <Route path="/Payslip" element={<Payslip />} />
          <Route path="/Deduction" element={<Deduction />} />
          <Route path="/Allowance" element={<Allowance />} />
          <Route path="/Summary" element={<Summary />} />

          <Route path="/AddLeave" element={<Addleave />} />
          
          

          {/* Attendance Sidebar link*/}
          <Route path="/Attendance" element={<Attendance />} />


          {/* UserMananagement Sidebar link */}
          

          {/* Setting Sidebar link */}
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          {/* Not Found link */}

          
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
