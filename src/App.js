import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Navbar from "./components/Navbar"
import UserDetails from './components/UserDetails'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from "./components/NotFound"
const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/users/:id" element ={<UserDetails/>}/>
              <Route exact path="/contact"  element={<Contact/>}/>
              <Route path="*"  element={<NotFound/>}/>
        </Routes>
    </div>
  )
}
export default App