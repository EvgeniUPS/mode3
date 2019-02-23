import React from 'react'
import { Link } from 'react-router-dom'
import HeaderBlock from '../atom/Header'
import '../../styles/Header.css'
import Category from '../Category'

export const Header = () => (
  <HeaderBlock>
    <div className="header-logo">
      <img src="/img/logo.jpg" alt="logo" />
      <Link to='/'>Lyceum's Odessa News</Link>
    </div>
    <div className="header-nav">
      <ul>
      <li><Link to='/'>Category</Link>
      </li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/login'>SignUp/Login</Link></li>
      </ul>


    </div>
  </HeaderBlock>
)
