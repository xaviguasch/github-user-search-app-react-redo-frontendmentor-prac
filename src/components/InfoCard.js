import React from 'react'

import { ReactComponent as IconLocation } from '../assets/icon-location.svg'
import { ReactComponent as IconWebsite } from '../assets/icon-website.svg'
import { ReactComponent as IconTwitter } from '../assets/icon-twitter.svg'
import { ReactComponent as IconCompany } from '../assets/icon-company.svg'

import './InfoCard.css'

const InfoCard = ({ userData, darkMode }) => {
  console.log(userData)

  const {
    login,
    name,
    avatar_url,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
  } = userData

  const fromISOStringToLongDate = (date) => {
    let d = new Date(date)

    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

    return `${day} ${month} ${year}`
  }

  return (
    <div className={`InfoCard card ${darkMode ? 'dark-mode' : ''}`}>
      <div className='card__main-grid'>
        <div className='card__avatar'>
          <img id='avatar' src={avatar_url} alt='avatar' />
        </div>
        <div className='card__inner-grid-1'>
          <h2 className='full-name'>{name}</h2>
          <p className='github-handle'>{login ? `@${login}` : 'not available'}</p>
          <p className='starting-date'>
            <span className='date'>{fromISOStringToLongDate(created_at)}</span>
          </p>
        </div>
        <div className='card__inner-grid-2'>
          <p className='bio'>{bio ? bio : 'Bio not available'}</p>

          <div className='stats'>
            <div className='measure'>
              <p className='measure__name'>Repos</p>
              <span id='repos' className='measure__unit'>
                {public_repos}
              </span>
            </div>
            <div className='measure'>
              <p className='measure__name'>Followers</p>
              <span id='followers' className='measure__unit'>
                {followers}
              </span>
            </div>
            <div className='measure'>
              <p className='measure__name'>Following</p>
              <span id='following' className='measure__unit'>
                {following}
              </span>
            </div>
          </div>
          <div className='info'>
            <ul className='info--list'>
              <li
                className={`list-el list-el--location ${location ? '' : 'less-opacity'}`}
              >
                <div className='icon'>
                  <IconLocation className='icon-location' />
                </div>
                <p id='location'>{location || 'Not available'}</p>
              </li>
              <li className={`list-el list-el--blog ${blog ? '' : 'less-opacity'}`}>
                <div className='icon'>
                  <IconWebsite className='icon-website' />
                </div>
                <a id='blog' href='#' target='_blank' className='list-el__link'>
                  {blog || 'Not available'}
                </a>
              </li>
              <li
                className={`list-el list-el--twitter ${
                  twitter_username ? '' : 'less-opacity'
                }`}
              >
                <div className='icon'>
                  <IconTwitter className='icon-twitter' />
                </div>
                <a id='twitter' href='#' target='_blank' className='list-el__link'>
                  {twitter_username || 'Not available'}
                </a>
              </li>
              <li className={`list-el list-el--company ${company ? '' : 'less-opacity'}`}>
                <div className='icon'>
                  <IconCompany className='icon-company' />
                </div>
                <p id='company'>{company || 'Not available'}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
