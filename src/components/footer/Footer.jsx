import React from 'react'
import './Footer.css'
import {ImFacebook2} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Uves</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/uves-shaikh.148" target="_blank" rel="noreferrer"><ImFacebook2 /></a>
        <a href="https://instagram.com/uves.here?igshid=Mzc0YWU1OWY=" target="_blank" rel="noreferrer"><BsInstagram /></a>
        <a href="https://twitter.com/ShaikhUv1?t=Qu3hhehSathRGsv5_C5Mww&s=09" target="_blank" rel="noreferrer"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Uves Shaikh. All right Reserved</small>
      </div>
    </footer>
  )
}

export default Footer