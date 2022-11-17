import React from 'react'
import Navigation from './Components/Navbar/Navigation';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import SignIn from './Components/Signin/SignIn';
import SignUp from './Components/Signup/SignUp';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
       
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;