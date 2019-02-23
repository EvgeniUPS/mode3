import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../store/actions/gerPostsAction'
import '../styles/App.css'
import Posts from './Posts'


class App extends PureComponent {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const { posts } = this.props
    return (
      <>
        <div className="Posts">
        <Posts posts={posts.posts}/>
        </div>
      </>
    )
  }
}
const mapSate = ({ posts }) => ({
  posts
})
export default connect(
  mapSate,
  { getPosts }
)(App)
