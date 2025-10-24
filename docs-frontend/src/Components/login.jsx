import React from 'react'
import LoginBackGround from '../Components/LoginBackGround'

const Login = () => {
  return (
    <div className='relative h-screen w-full'>
      <LoginBackGround />
      <div className='absolute inset-0 z-20 flex items-center justify-center  pointer-events-none'>
        <form className='bg-amber-600 p-6 w-80 rounded-2xl shadow-2xl pointer-events-auto'>
          <label className='block text-white mb-1'> Username  </label>
          <input type='text' placeholder='Enter your Username'
            className='w-65 px-3 py-2 rounded-2xl'
          />

          <label className='block text-white mb-1'> Password  </label>
          <input type='text' placeholder='Enter your Password'
            className='w-65 px-3 py-2 rounded-2xl'
          />

        </form>
      </div>

      <input />
    </div>
  )
}

export default Login
