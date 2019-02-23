import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Posts from '../components/Posts'
import Post from '../components/Post'
import { getPosts } from '../store/actions/getPostsAction'
import { getMainPost } from '../store/actions/getMainPostAction'
import '../styles/App.css'
import '../styles/Posts.css'

class Home extends PureComponent {
  componentDidMount() {
    this.props.getMainPost()
    this.props.getPosts()
  }

  render() {
    const { posts, mainPost } = this.props


    return (
      <>
        {
          mainPost.post && <div className='MainPost'>
            <Post title={mainPost.post.title} img={mainPost.post.img} content={mainPost.post.post} />
          </div>
        }
        <div className="Posts">
          <Posts posts={posts.posts} />
        </div>
      </>
    )
  }
}
const mapSate = ({ posts, mainPost }) => ({
  posts,
  mainPost
})
export default connect(
  mapSate,
  { getPosts, getMainPost }
)(Home)
