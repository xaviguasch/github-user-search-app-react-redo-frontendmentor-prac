import React, { useState, useEffect } from 'react'

import InfoCard from './components/InfoCard'
import Search from './components/Search'
import Toggle from './components/Toggle'

import './App.css'

function App() {
  const [userData, setUserData] = useState()
  const [error, setError] = useState('')

  const getDataFromAPI = (user) => {
    const API = 'https://api.github.com/users/'

    fetch(API + user)
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error('something went wrong while requesting posts')
      })
      .then((data) => setUserData(data))
      .catch((error) => setError(error.message))
  }

  const getUserInfo = (user) => {
    getDataFromAPI(user)
  }

  const onSearchSubmit = (user) => {
    getUserInfo(user)
  }

  if (error) return <h1>{error}</h1>

  return (
    <div className='App'>
      <div className='wrapper'>
        <h1>devfinder</h1>
        <Toggle />
        <Search onSearchSubmit={onSearchSubmit} />
        {userData && <InfoCard userData={userData} />}
      </div>
    </div>
  )
}

export default App
