import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class About extends Component {
  render() {
    return (
      <div>
        <Link to='/' children='Home' />
        <h2>About</h2>
      </div>

    )
  }
}

export default About
