import React from 'react'

function Contact() {
  return (
    <div className=' max-w-md w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-md mt-[60vh] mb-20'>
<h2 className='text-3xl text-center text-pink-600 font-bold mb-6'>Contact Us</h2>
<form action=''>
<div className='mb-7'>
        <label   className=' block text-white text-sm font-semibold mb-2' htmlFor=''>Your Name</label>
        <input type='text' placeholder='enter your email' className=' w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-600 text-white' required/>
    </div>
    <div className='mb-7'>
        <label   className=' block text-white text-sm font-semibold mb-2' htmlFor=''>Your Email</label>
        <input type='text' placeholder='enter your email' className=' w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-600 text-white' required/>
    </div>
    <div className='mb-4'>
        <label  className=' block text-white text-sm font-semibold mb-2' htmlFor=''>Message</label>
        <textarea rows='4' type='text' placeholder='Type Your message here....' className=' w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-600 text-white'  required/>
    </div>
    <div className=' flex justify-center'>
        <button type='submit' className=' bg-pink-500 text-white font-semibold px-4  py-2 rounded-lg hover:bg-pink-600 focus:border-blue-500 focus:outline-white'>
          Send Message 
          
        </button>
    </div>
   
</form>
    </div>
    
  )
}

export default Contact