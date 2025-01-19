import React from 'react'
import "./index.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false)

  return (
    <div>
          <header  className='flex justify-between items-center text-black py-6 px-8 md:px-32
            bg-white drop-shadow-md 
          '>
                <Link to="/">
                  < AccountCircleIcon fontSize='large'  className='material-ui-styling'/>
                </Link>
                <ul className='hidden xl:flex items-center 
                  gap-12 font-semibold text base
                '>
                      <Link to="/">

                      <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md 
                       transition-all cursor-pointer
                      '>Home</li>
                      </Link>
                      <Link to="/about">
                      <li  className='p-3 hover:bg-sky-400 hover:text-white rounded-md 
                       transition-all cursor-pointer
                      '>About</li>
                      </Link>
                      <Link to="/contact">
                      <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md 
                       transition-all cursor-pointer
                      '>Contact</li>
                      </Link>

                </ul>
                <i className='bx bx-menu xl:hidden block 
                text-5xl cursor-pointer
                ' onClick={()=> setIsMenuOpen(!isMenuOpen)}>
                </i>
                <div className={`absolute xl:hidden top-24 
                   left-0  w-full bg-white flex flex-col  
                   items-center gap-6 font-semibold text-lg  
                   transform transition-transform ${isMenuOpen ?  "opacity-100":"opacity-0"}
                  `}   style={{transition:"transform 0.3s ease,opacity 0.3s ease"}}>
                    <Link to="/">
                    <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white
                      transition-all cursor-pointer
                    '>Home</li>
                    </Link>
                    <Link to="/about">
                    <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white
                      transition-all cursor-pointer
                    '>About</li>
                    </Link>
                    <Link to="/contact">
                    <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white
                      transition-all cursor-pointer
                    '>Contact</li>
                    </Link>
                </div>
                    
          </header>
    </div>
  )
}

export default Navbar