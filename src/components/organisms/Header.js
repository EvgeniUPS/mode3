import React from 'react'
import { Link } from 'react-router-dom'
import HeaderBlock from '../atom/Header'
import '../../styles/Header.css'

export const Header = () => (
  <HeaderBlock>
    <div className="header-logo">
      <img src="/img/logo.jpg" alt="logo" />
      <h2>Lyceum's Odessa News</h2>
    </div>
    <div className="header-nav">
      <ul>
        <li><Link to='/category'>Category</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/login'>SignUp/Login</Link></li>
      </ul>
    </div>
  </HeaderBlock>
)
