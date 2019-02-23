import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/Selected.css'

class InfoPost extends Component {
  render() {
    const { infoPost } = this.props
    // const { post } = infoPost
    // const { commit } = post
    // console.log('commit :', post)
    infoPost.post && console.log(infoPost.post.commit)

    return (
      <div>
        {infoPost.post && <div className="single-post">
          <div>
            <img src={infoPost.post.img} alt="logo img" className="post-image" />
          </div>
          <div className="post-title">{infoPost.post.title}</div>
          <p className="post-text">{infoPost.post.post}</p>

          <div className="post-comments-title">Comments</div>

            <div className="post-comments-title">Comments</div>
            <div className="comment-container">
              {infoPost.post &&
                infoPost.post.commit.map(item => {
                  console.log(item)

                  return (
                    <div className="comment-block" key={item.id}>
                      <div className="comment-header">
                        <img
                          src={item.avatar}
                          alt="logo img"
                          className="avatar"
                        />
                        <div className="user-name">{item.userName}</div>
                      </div>
                      <div className="comment-text">{item.msg}</div>
                      {item.answer &&
                        item.answer.map(answer => {
                          console.log(answer)
                          return (
                            <div className="answer-block" key={answer.id}>
                              <div className="comment-header">
                                <img
                                  src={answer.avatar}
                                  alt="logo img"
                                  className="avatar"
                                />
                                <div className="user-name">
                                  {answer.userName}
                                </div>
                              </div>
                              <div className="comment-text">{answer.msg}</div>
                            </div>
                          )
                        })}
                    </div>
                  )
                })}
            </div>
            {/* <div className="comment-header">
                <img src="./img/avatar.jpg" alt="logo img" className="avatar" />
                <div className="user-name">
                
                  {infoPost.post.commit[0].userName}
                </div>
              </div>
              <div className="comment-text">{infoPost.post.commit[0].msg}</div> */}
          </div>
        )}
      </div>
    )
  }
}
const mapSate = ({ infoPost }) => ({
  infoPost,
})
export default connect(
  mapSate,
  null
)(InfoPost)
