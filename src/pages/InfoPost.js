import React, { Component } from 'react'
import { connect } from 'react-redux'

class InfoPost extends Component {
  render() {
    const { infoPost } = this.props
    console.log(infoPost.post)

    return (
      <div>
        {infoPost.post && infoPost.post.id}
      </div>
    )
  }
}
const mapSate = ({ infoPost }) => ({
  infoPost
})
export default connect(mapSate, null)(InfoPost)