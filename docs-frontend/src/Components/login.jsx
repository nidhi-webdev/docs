import React from 'react'
import LoginBackGround from '../Components/LoginBackGround'
import { useState } from 'react'

const Login = () => {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const handleLogin = async (e) => {
  e.preventDefault()
  try {
    const res = await fetch('http://localhost:5001/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password})
    })
  } catch(err) {
     alert('Make sure Backend is running')
  }
}



  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <LoginBackGround />
      
    
      <div className='absolute inset-0 z-20 flex items-center justify-center pointer-events-none'>
        <form className='pointer-events-auto bg-white/10 backdrop-blur-lg px-8 py-10 w-96 rounded-3xl shadow-2xl border border-white/20'>
          {/* Header */}
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-white mb-2'>Welcome Back</h1>
            <p className='text-white/70 text-sm'>Please login to your account</p>
          </div>

          {/* Username field */}
          <div className='mb-6'>
            <label className='block text-white text-sm font-medium mb-2'>Username</label>
            <input 
              type='text' 
              placeholder='Enter your username'
              className='w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all'
            />
          </div>

          {/* Password field */}
          <div className='mb-8'>
            <label className='block text-white text-sm font-medium mb-2'>Password</label>
            <input 
              type='password' 
              placeholder='Enter your password'
              className='w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all'
            />
          </div>

          {/* Buttons */}
          <div className='space-y-3'>
            <button onSubmit={handleLogin}
              type='submit' 
              className='w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg'
            >
              Log In
            </button>
            <button 
              type='button' 
              className='w-full bg-white/20 backdrop-blur-sm text-white font-semibold py-3 rounded-xl hover:bg-white/30 transition-all duration-200 border border-white/30'
            >
              Sign Up
            </button>
          </div>

          {/* Footer */}
          <div className='text-center mt-6'>
            <a href='#' className='text-white/70 text-sm hover:text-white transition-colors'>
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
