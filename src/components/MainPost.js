import React from 'react'
import Button from './atom/Button'
import {connect} from 'react-redux'
import {getInfoPost} from '../store/actions/getInfoPostAction'


const MainPost = ({ id, img, title, post, getInfoPost }) => {
  return (
    <div className="info-post">
    <div className="info-post-img">
      <img src={`/img/origin/${img}`} alt="post-img" />
    </div>
    <div className="info-post-content">
      <h4>{title}</h4>
      <p>{post}</p>
    </div>
    <Button children="details photo" onClick={() => getInfoPost(id)}/>
    </div>
  )
}

export default connect(null, {getInfoPost})(MainPost)
