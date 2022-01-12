import React, { useState, useEffect } from 'react'

import InfoCard from './components/InfoCard'
import Search from './components/Search'

import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>Github Jobs</h1>
      <Search />
      <InfoCard />
    </div>
  )
}

export default App
