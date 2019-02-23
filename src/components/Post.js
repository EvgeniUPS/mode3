import React from 'react'
import '../styles/Post.css'
const Post = ({ img, title, content }) => {
  return (
    <div className="container-news">
    <img src={img} alt="post-img"/>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  )
}

export default Post
