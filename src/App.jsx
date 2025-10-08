import React from 'react'
import BackGround from './Components/BackGround'

const App = () => {
  return (
    <div className='relative full-width h-screen bg-zinc-800'>
      <BackGround />
      <div className='fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/50'>

      </div>
    </div>
  )
}

export default App
