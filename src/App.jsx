import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Navbar from './Component/Navbar'
import Register from './pages/Register'
import { useEffect, useState } from 'react'
import Dashboard from './pages/Dashboard'
import { analytics } from './Utils'
import { logEvent } from 'firebase/analytics'
import Chat from './pages/Chat'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './Footer/Footer'
import Card from './Component/Card'
import Contact from './pages/Contact'

function App () {
  if (analytics) {
    logEvent(analytics, 'user visited')
  }
  const [loggedIn, setisLoggedIn] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('userToken')
    console.log(token)
    if (token) {
      setisLoggedIn(true)
    }
  }, [])

  return (
    <>
      <div className=' text-white h-[100vh] flex flex-col justify-center items-center bg-cover'>
        <Navbar />

        <Card />

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          {loggedIn && <Route path='/dashboard' element={<Dashboard />} />}
          <Route path='/register' element={<Register />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <address>Degree College Kathua</address>
        <div className=' overflow h-0 py-20 relative'>
          <iframe className=' border h-[100vh] w-[100vh] left-0 top-0 absolute'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26958.503841695747!2d75.49510126873105!3d32.3705622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c71f5c3c0f2cd%3A0x727ebe8accd38c4d!2sGovernment%20Degree%20College%20Women%2C%20Kathua!5e0!3m2!1sen!2sin!4v1708141309129!5m2!1sen!2sin'
            width='600'
            height='450'
          
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
