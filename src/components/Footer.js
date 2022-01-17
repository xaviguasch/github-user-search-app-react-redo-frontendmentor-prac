import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <footer class='Footer'>
      <div class='footer__signature'>
        <div class='attribution'>
          <p class='footer__text'>
            Challenge by{' '}
            <a
              class='footer__link'
              href='https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6'
              target='_blank'
            >
              Frontend Mentor
            </a>
            . Coded by{' '}
            <a class='footer__link' href='https://github.com/xaviguasch/'>
              Xavi Guasch
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
