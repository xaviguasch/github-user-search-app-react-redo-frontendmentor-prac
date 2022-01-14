import React, { useState, useEffect } from 'react'

import InfoCard from './components/InfoCard'
import Search from './components/Search'
import Toggle from './components/Toggle'

import './App.css'

function App() {
  const [userData, setUserData] = useState()
  const [error, setError] = useState('')
  const [errorDisplay, setErrorDisplay] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  const getDataFromAPI = (user) => {
    const API = 'https://api.github.com/users/'

    fetch(API + user)
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error('something went wrong while requesting posts')
      })
      .then((data) => setUserData(data))
      .catch((error) => {
        setError(error.message)
      })
  }

  const getUserInfo = (user) => {
    getDataFromAPI(user)
  }

  const handleSearchSubmit = (user) => {
    getUserInfo(user)
  }

  // Hides error message display on click
  const hideErrorDisplay = () => {
    setErrorDisplay(false)
  }

  const activateDarkMode = () => {
    setDarkMode((prevState) => !prevState)
  }

  if (error && errorDisplay) return <h1 onClick={hideErrorDisplay}>{error}</h1>

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <div className='wrapper'>
        <Toggle darkMode={darkMode} onActivateDarkMode={activateDarkMode} />
        <Search onSearchSubmit={handleSearchSubmit} darkMode={darkMode} />
        {userData && <InfoCard userData={userData} darkMode={darkMode} />}
      </div>
    </div>
  )
}

export default App
