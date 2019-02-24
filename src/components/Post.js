import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getInfoPost } from '../store/actions/getInfoPostAction'


class Post extends Component {
  goInfo = (id, history) => this.props.getInfoPost(id, history)

  render() {
    const { id, img, title, content, history } = this.props

    return (
      <div className="container-news" onClick={() => this.goInfo(id, history)}>
        <img src={`/origin/${img}`} alt="post-img" />
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    )
  }
}

const mapState = ({ infoPost }) => infoPost
export default withRouter(
  connect(
    mapState,
    { getInfoPost }
  )(Post)
)
