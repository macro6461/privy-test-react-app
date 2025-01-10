import { useState } from 'react'

import './App.css'
import LoginButton from './components/LoginButton'
import Main from './components/Main'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isReady, setIsReady] = useState(false)

  const handleLoginLogout = (res:boolean) => {
    setIsAuthenticated(res)
  }

  const handleReady = (res:boolean) => {
    setIsReady(res)
  }

  return (

      <div>
        {!isReady ? <h2>Loading...</h2> : <><h1>Privy Test App</h1>
        {isAuthenticated ? <Main /> : null}</>}
        <LoginButton handleLogin={handleLoginLogout} useLogin={!isAuthenticated} handleReady={handleReady}/>
      </div>

  )
}

export default App
