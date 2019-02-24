import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { getInfoComment } from '../store/actions/getInfoPostAction'
import '../styles/Selected.css'

class InfoPostBlock extends Component {
componentDidMount(){
  const id = this.props.infoPost.post.id
  id && this.props.getInfoComment(id)
}
  render() {
    const { infoPost } = this.props


    console.log(777, infoPost)

    return (
      <div>
        {infoPost.post && (
          <div className="single-post">
            <div>
              <img
                src={`/img/origin/${infoPost.post.img_list[0]}`}
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
export default withRouter(connect(mapSate, {getInfoComment})(InfoPostBlock))
