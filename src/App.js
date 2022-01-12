import React, { useState, useEffect } from 'react'

import InfoCard from './components/InfoCard'
import Search from './components/Search'
import Toggle from './components/Toggle'

import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>devfinder</h1>
      <Toggle />
      <Search />
      <InfoCard />
    </div>
  )
}

export default App
