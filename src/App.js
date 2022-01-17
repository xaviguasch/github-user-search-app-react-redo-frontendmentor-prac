import React, { useState, useEffect } from 'react'

import InfoCard from './components/InfoCard'
import Search from './components/Search'
import Toggle from './components/Toggle'
import Footer from './components/Footer'

import './App.css'

function App() {
  const [userData, setUserData] = useState()
  const [errorDisplay, setErrorDisplay] = useState(false)
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
        setErrorDisplay(true)
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

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <div className='wrapper'>
        <Toggle darkMode={darkMode} onActivateDarkMode={activateDarkMode} />
        <Search
          onSearchSubmit={handleSearchSubmit}
          darkMode={darkMode}
          errorDisplay={errorDisplay}
          onHideErrorDisplay={hideErrorDisplay}
        />

        {!errorDisplay && userData && (
          <InfoCard userData={userData} darkMode={darkMode} />
        )}
        {!errorDisplay && userData && <Footer darkMode={darkMode} />}
      </div>
    </div>
  )
}

export default App
