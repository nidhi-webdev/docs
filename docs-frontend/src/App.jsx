
import BackGround from './Components/backGround'
import ForGround from './Components/ForGround'
import Login from './Components/login'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    <div className='relative full-width h-screen bg-zinc-800'>
      {!isLoggedIn ? (<Login onLogin={() => setIsLoggedIn(true)} />)
        : (
          <>
            <BackGround />
            <ForGround />
          </>
        )

      }




    </div>
  )
}

export default App
