import React from 'react'

const MainPost = ({ img, title, content }) => {
  return (
    <div className="info-post">
    <div className="info-post-img">
      <img src={img} alt="post-img" />
    </div>
    <div className="info-post-content">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>

    </div>
  )
}

export default MainPost
