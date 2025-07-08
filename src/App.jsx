import { useState } from 'react'
import './App.css'
import { Route, Routes, Link} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import About from './pages/About'
import Navigationbar from './components/Navigationbar'
import Contact from './pages/Contact'
import Attendance from './pages/Attendance'




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
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Attendance" element={<Attendance />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
