import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Posts from '../components/Posts'
import MainPost from '../components/MainPost'
import { getPosts } from '../store/actions/getPostsAction'
import { getMainPost } from '../store/actions/getMainPostAction'
import { getInfoPost } from '../store/actions/getInfoPostAction'
import '../styles/App.css'
import '../styles/Home.css'


class Home extends PureComponent {
  componentDidMount() {
    this.props.getMainPost()
    this.props.getPosts()
  }

  render() {
    const { posts, mainPost } = this.props

    return (
      <>
        {mainPost.post && (
          <MainPost
            img={mainPost.post.img_list[0]}
            title={mainPost.post.title}
            content={mainPost.post.post}
          />
        )}
        <div className="Posts">
          <Posts posts={posts.posts} />
        </div>
      </>
    )
  }
}
const mapSate = ({ posts, mainPost }) => ({
  posts,
  mainPost,
})
export default connect(
  mapSate,
  { getPosts, getMainPost, getInfoPost }
)(Home)
