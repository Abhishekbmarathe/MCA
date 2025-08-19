import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import Nav from './components/Nav';
import Signin from './components/LoginRoles/Signin'
import Signup from  './components/LoginRoles/Signup'
// import UserLogin from  './components/LoginRoles/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        {/* <Route path="/user-login" element={<UserLogin />} /> */}

      </Routes>
    </Router>
  )
}

export default App
