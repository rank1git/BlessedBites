import React from 'react'
import { NavLink } from 'react-router-dom'

const Inbox = () => {
  return (
    <div className='bg-orange-200 flex flex-col justify-center items-center p-20 mt-20'>
      <h1 className='text-4xl font-serif font-semibold w-64 text-center'>Deliciousness to your inbox</h1>
      <p className='mt-4 w-64 text-center font-light mb-4'>Enjoy weekly hand picked recipes and recommendations</p>
      <div>
        <input className='py-3 pl-2 pr-16' type='email' placeholder='Email Address' />
        <button className='py-3 px-6 text-white bg-orange-500 hover:bg-orange-600 mb-4'>JOIN</button>
      </div>
      <p>By joining our newsletter you agree to our <span><NavLink to='/terms-and-conditions' className='underline decoration-orange-500'>Terms and Conditions</NavLink></span></p>

    </div>
  )
}

export default Inbox
