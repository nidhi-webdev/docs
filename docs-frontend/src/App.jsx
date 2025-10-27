
import BackGround from './Components/backGround'
import ForGround from './Components/ForGround'
import Login from './Components/login'
import { useEffect, useState } from 'react'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem('isLoggedIn')
    return saved === 'true'
  })

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn)
  }, [isLoggedIn])
  

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
