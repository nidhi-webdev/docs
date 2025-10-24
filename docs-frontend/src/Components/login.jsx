import React from 'react'
import LoginBackGround from '../Components/LoginBackGround'

const Login = () => {
  return (
    <div className='relative h-screen w-full'>
      <LoginBackGround />
      <div className='absolute inset-0 z-20 flex items-center justify-center  pointer-events-none'>
        <div className='bg-amber-600 p-6 rounded-2xl shadow-2xl pointer-events-auto'>
          <label> Username  </label>
          <input type='text' placeholder='Enter your Username' className='w-5 h-1' />
        </div>
      </div>

      <input />
    </div>
  )
}

export default Login
