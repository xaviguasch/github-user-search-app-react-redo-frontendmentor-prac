import React from 'react'

import './Toggle.css'

import IconMoon from '../assets/icon-moon.svg'
import IconSun from '../assets/icon-sun.svg'

const Toggle = ({ darkMode, onActivateDarkMode }) => {
  const handleToggle = () => {
    onActivateDarkMode()
  }

  return (
    <header className='Toggle'>
      <h1 className='title'>Devfinder</h1>
      <div className='mode'>
        <div className='mode__light'>
          <p className='mode__type' onClick={handleToggle}>
            {darkMode ? 'LIGHT' : 'DARK'}
          </p>
          <span className='svg-icon-moon'>
            <img src={darkMode ? IconSun : IconMoon} alt='icon toggle' />
          </span>
        </div>
      </div>
    </header>
  )
}

export default Toggle
