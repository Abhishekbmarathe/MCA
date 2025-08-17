import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Nav from './components/Nav';
import AdminLogin from './components/LoginRoles/Admin'
import OrganizerLogin from  './components/LoginRoles/Organizer'
// import UserLogin from  './components/LoginRoles/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/organizer-login" element={<OrganizerLogin />} />
        {/* <Route path="/user-login" element={<UserLogin />} /> */}

      </Routes>
    </Router>
  )
}

export default App
