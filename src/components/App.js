import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


import { getPosts } from '../store/actions/gerPostsAction'
import '../styles/App.css'
import Posts from './Posts'
import { Footer } from './organisms/Footer'
import { SelectedPost } from './organisms/SelectedPost'

class App extends PureComponent {
  componentDidMount() {
    this.props.getPosts()
  }
  //ololo
  render() {
    const { posts } = this.props
    return (
      <>
        <div className="Posts">
          <Posts posts={posts.posts} />
        </div>
        <SelectedPost post={this.props.posts.posts} />

        <Footer />
      </>
    )
  }
}
const mapSate = ({ posts }) => ({
  posts,
})
export default connect(
  mapSate,
  { getPosts }
)(App)
