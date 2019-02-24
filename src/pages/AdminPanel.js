import React, { Component } from 'react'
import TextFields from '../components/molecules/TextFields'

class AdminPanel extends Component {
  state = {
    isAdmin: true,
  }
  render() {
    return (
      <div>
        <div className="new-headline">
          <input type="text" />
        </div>
        <div className="new-content">
          <input type="text" />
        </div>
        <div className="new-img">
          <input type="file" />
        </div>
      </div>
    )
  }
}

export default AdminPanel
