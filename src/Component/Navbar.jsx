import React from 'react'

import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'



const Navbar = () => {
  return (
    <header className=' bg-purple-400 fixed top-0   w-full '>
      <nav className=' flex  flex-row items-center '>
        <div>
          <a
            href='/'
            className=' text-2xl font-semibold flex items-center space-x-3'
          >
            <img
              src={logo}
              alt=''
              className=' w-20 h-20 inline-block items-center rounded-full'
            />
            <span className=' text-purple-800 ms-5'>
             WEBSITE
            </span>
          </a>
        </div>
        <div className=' flex flex-row items-center p-50 '>
          <Link to='/'>
            <p className='ml-10  hover:text-slate-400 font-serif'>
              <b>Home</b>
            </p>
          </Link>
          <Link to='/about'>
            <p className='ml-10  hover:text-slate-400 font-serif'>
              <b>About</b>
            </p>
          </Link>
          <Link to='/contact'>
            <p className='ml-10  hover:text-slate-400 font-serif'>
              <b>Contact</b>
            </p>
          </Link>
                <div className='w-[40vh] justify-center top-[2vh]'><Searchbar/></div>
                       <div>
                <br></br>
                <span className='m-4'>
                 
                  <Link className='text-blue-500 ml-[80vh]' to='/login'>
                   <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-white dark:focus:ring-gray-700">LogIn</button>
                  </Link>
                </span>
              </div>
      </div>
</nav>
</header>
 )
}
export default Navbar
