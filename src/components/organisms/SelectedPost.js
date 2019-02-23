import React from 'react'
import '../../styles/SelectedPost.css'

export const SelectedPost = ({ post }) => {
  post && console.log(post[0].title)
  return (
    post && (
      <div className="single-post">
        <div>
          <img src={post[0].img} alt="logo img" className="post-image" />
        </div>
        <div className="post-title">{post[0].title}</div>
        <p className="post-text">{post[0].post}</p>

        <div className="post-comments-title">Comments</div>

        <div className="comment-block">
          <div className="comment-header">
            <img src="./img/avatar.jpg" alt="logo img" className="avatar" />
            <div className="user-name">Bill Gates</div>
          </div>
          <div className="comment-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus debitis deserunt reiciendis asperiores consectetur
            architecto possimus ipsa unde nobis laudantium!
          </div>
        </div>

        <div className="comment-block second-level">
          <div className="comment-header">
            <img src="./img/avatar.jpg" alt="logo img" className="avatar" />
            <div className="user-name">Bill Gates</div>
          </div>
          <div className="comment-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus debitis deserunt reiciendis asperiores consectetur
            architecto possimus ipsa unde nobis laudantium!
          </div>
        </div>

        <div className="comment-block ">
          <div className="comment-header">
            <img src="./img/avatar.jpg" alt="logo img" className="avatar" />
            <div className="user-name">Bill Gates</div>
          </div>
          <div className="comment-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus debitis deserunt reiciendis asperiores consectetur
            architecto possimus ipsa unde nobis laudantium!
          </div>
        </div>
      </div>
    )
  )
}
