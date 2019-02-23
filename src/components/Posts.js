import React, { Component } from 'react'
import Post from './Post'

class Posts extends Component {
  render() {
    const { posts } = this.props

    return (
      posts &&
      posts.map(item => {
        return (
          <Post
            id={item.id}
            key={item.id}
            img={item.img}
            title={item.title}
            content={item.post}
          />
        )
      })
    )
  }
}

export default Posts
