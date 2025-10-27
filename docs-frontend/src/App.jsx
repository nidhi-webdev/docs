
import BackGround from './Components/backGround'
import ForGround from './Components/ForGround'
import Login from './Components/login'
import { useEffect, useState } from 'react'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState()

  useEffect(() => {
    
  }, [third])
  

if(!isLoggedIn) {
  return <Login onLoginSuccess = {() => setIsLoggedIn(true) } />
}

  return (
    <div className='relative full-width h-screen bg-zinc-800'>
          <>
            <BackGround />
            <ForGround />
          </>
    </div>
  )
}

export default App
