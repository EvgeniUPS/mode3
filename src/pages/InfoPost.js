import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/Selected.css'

class InfoPost extends Component {
  render() {
    const { infoPost } = this.props


    console.log(infoPost)

    return (
      <div>
        {infoPost.post && (
          <div className="single-post">
            <div>
              <img
                src={`img/origin/${infoPost.post.img_list[0]}`}
                alt="logo img"
                className="post-image"
              />
            </div>
            <div className="post-title">{infoPost.post.title}</div>
            <p className="post-text">{infoPost.post.post}</p>

            <div className="post-comments-title">Comments</div>
          </div>
        )}
      </div>
    )
  }
}
const mapSate = ({ infoPost }) => ({
  infoPost,
})
export default InfoPost
