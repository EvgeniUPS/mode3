import React from 'react'
import Div from '../atom/Div'
import FooterBlock from '../atom/Footer'

export const Footer = () => (
  <FooterBlock>
    <Div alignItems='center'>
      <img src="/img/logo.jpg" alt="logo img"  style={{width: '25px', height: '25px'}}/>
      <h2>Lyceum's Odessa News</h2>
    </Div>
  </FooterBlock>
)
