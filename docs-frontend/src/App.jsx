
import BackGround from './Components/backGround'
import ForGround from './Components/ForGround'
import Login from './Components/login'
import { useEffect, useState } from 'react'

const App = () => {
  // const [username, setUsername] = useState(() => localStorage.getItem('username' || '' ))
  const [username, setUsername] = useState(() => localStorage.getItem('username') || '')


  const [isLoggedIn, setIsLoggedIn] = useState(() => {

    const token = localStorage.getItem('authToken')
    const loginStatus = localStorage.getItem('isLoggedIn')
    return !!token && loginStatus === 'true'
  })

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn)
  }, [isLoggedIn])


  if (!isLoggedIn) {
    return (
      <Login
        onLoginSuccess={(loggedInUsername, token) => {
          if (token) localStorage.setItem('authToken', token)
          if (loggedInUsername) {
            localStorage.setItem('username', loggedInUsername)
            setUsername(loggedInUsername)
          }
          setIsLoggedIn(true)
        }}
      />
    )
  }

  return (
    <div className='relative full-width h-screen bg-zinc-800'>
      <>
        <BackGround />
        <ForGround username={username} />
      </>
    </div>
  )
}

export default App
