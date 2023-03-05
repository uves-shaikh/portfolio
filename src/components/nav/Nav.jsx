import React from 'react'
import './Nav.css'
import {GoHome} from 'react-icons/go'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {TiContacts} from 'react-icons/ti'
import {useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return ( 
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GoHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiContacts /></a>
    </nav>
  )
}

export default Nav