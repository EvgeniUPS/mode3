import API from '../../api'
import { GetPosts } from '../types'

const getPostsStart = () => ({ type: GetPosts.start })
const getPostsSuccess = payload => ({ type: GetPosts.success, payload })
const getPostsFailure = payload => ({ type: GetPosts.failure, payload })

export const getPosts = (page = 0) => async dispatch => {
  try {
    dispatch(getPostsStart())

    const apiCall = await API.getPosts(page)
    const dataApi = await apiCall.json()

    console.log(dataApi)

    dispatch(getPostsSuccess(dataApi.posts))
  } catch (err) {
    dispatch(getPostsFailure('500 internal server error'))
  }
}
