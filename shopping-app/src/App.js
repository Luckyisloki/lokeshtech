import React from 'react'
import Home from './Components/Home/Home'
import Navigation from './Components/Navbar/Navigation'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Products from './Components/Products/Products'
import Conversion from './Components/Assignment/Conversion'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App