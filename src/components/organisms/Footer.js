import React from 'react'
import FooterBlock from '../atom/Footer'
import '../../styles/Footer.css'
export const Footer = () => (
  <FooterBlock>

    <div className="footer-nav">
      <ul>
        <li><a href="#">Social 1</a></li>
        <li><a href="#">Social 2</a></li>
        <li><a href="#">Social 3</a></li>
      </ul>
    </div>
    <div className="footer-logo">
      <img src="/img/logo.jpg" alt="logo img"></img>
      <h2>Lyceum's Odessa News</h2>
    </div>
  </FooterBlock>
)
