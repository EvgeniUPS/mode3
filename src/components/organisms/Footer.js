import React from 'react'
import FooterBlock from '../atom/Footer'
import { Link } from 'react-router-dom'
import '../../styles/Footer.css'
export const Footer = () => (
  <FooterBlock>
    <div className="footer-nav">
      <ul>
        <li>
          <Link to="/social1">Social 1</Link>
        </li>
        <li>
          <Link to="/social2">Social 2</Link>
        </li>
        <li>
          <Link to="/social3">Social 3</Link>
        </li>
      </ul>
    </div>
    <div className="footer-logo">
      <img src="/img/logo.jpg" alt="logo img" />
      <h2>Lyceum's Odessa News</h2>
    </div>
  </FooterBlock>
)
