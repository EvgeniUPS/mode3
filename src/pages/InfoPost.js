import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/Selected.css'

class InfoPost extends Component {
  render() {
    const { infoPost } = this.props
    console.log(infoPost.post)

    return (
      <div>
        {infoPost.post && <div className="single-post">
          <div>
            <img src={infoPost.post.img} alt="logo img" className="post-image" />
          </div>
          <div className="post-title">{infoPost.post.title}</div>
          <p className="post-text">{infoPost.post.post}</p>

          <div className="post-comments-title">Comments</div>


        </div>}
      </div>
    )
  }
}
const mapSate = ({ infoPost }) => ({
  infoPost
})
export default connect(mapSate, null)(InfoPost)

// <div className="comment-block">
//   <div className="comment-header">
//   <img src="./img/avatar.jpg" alt="logo img" className="avatar" />
//   <div className="user-name">Bill Gates</div>
// </div>
// <div className="comment-text">
//   Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//   Voluptatibus debitis deserunt reiciendis asperiores consectetur
// architecto possimus ipsa unde nobis laudantium!
// </div>
// </div>
//
// <div className="comment-block second-level">
//   <div className="comment-header">
//   <img src="./img/avatar.jpg" alt="logo img" className="avatar" />
//   <div className="user-name">Bill Gates</div>
// </div>
// <div className="comment-text">
//   Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//   Voluptatibus debitis deserunt reiciendis asperiores consectetur
// architecto possimus ipsa unde nobis laudantium!
// </div>
// </div>
//
// <div className="comment-block ">
//   <div className="comment-header">
//   <img src="./img/avatar.jpg" alt="logo img" className="avatar" />
//   <div className="user-name">Bill Gates</div>
// </div>
// <div className="comment-text">
//   Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//   Voluptatibus debitis deserunt reiciendis asperiores consectetur
// architecto possimus ipsa unde nobis laudantium!
// </div>
// </div>
