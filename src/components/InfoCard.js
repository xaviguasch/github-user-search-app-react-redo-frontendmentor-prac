import React from 'react'

import IconLocation from '../assets/icon-location.svg'
import IconWebsite from '../assets/icon-website.svg'
import IconTwitter from '../assets/icon-twitter.svg'
import IconCompany from '../assets/icon-company.svg'

import './InfoCard.css'

const InfoCard = () => {
  return (
    <div className='InfoCard card hidden'>
      <div className='card__main-grid'>
        <div className='card__avatar'>
          <img id='avatar' src='#' alt='avatar' />
        </div>
        <div className='card__inner-grid-1'>
          <h2 className='full-name'></h2>
          <p className='github-handle'></p>
          <p className='starting-date'>
            <span className='date'></span>
          </p>
        </div>
        <div className='card__inner-grid-2'>
          <p className='bio'></p>

          <div className='stats'>
            <div className='measure'>
              <p className='measure__name'>Repos</p>
              <span id='repos' className='measure__unit'></span>
            </div>
            <div className='measure'>
              <p className='measure__name'>Followers</p>
              <span id='followers' className='measure__unit'></span>
            </div>
            <div className='measure'>
              <p className='measure__name'>Following</p>
              <span id='following' className='measure__unit'></span>
            </div>
          </div>
          <div className='info'>
            <ul className='info--list'>
              <li className='list-el list-el--location'>
                <div className='icon'>
                  <img src={IconLocation} alt='icon location' />
                </div>
                <p id='location'></p>
              </li>
              <li className='list-el list-el--blog'>
                <div className='icon'>
                  <img src={IconWebsite} alt='icon website' />
                </div>
                <a id='blog' href='#' target='_blank' className='list-el__link'>
                  {' '}
                </a>
              </li>
              <li className='list-el list-el--twitter'>
                <div className='icon'>
                  <img src={IconTwitter} alt='icon twitter' />
                </div>
                <a id='twitter' href='#' target='_blank' className='list-el__link'>
                  {' '}
                </a>
              </li>
              <li className='list-el list-el--company'>
                <div className='icon'>
                  <img src={IconCompany} alt='icon company' />
                </div>
                <p id='company'></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
