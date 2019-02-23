import API from '../../api'
import { GetPosts } from '../types'

const getPostsStart = () => ({ type: GetPosts.start })
const getPostsSuccess = payload => ({ type: GetPosts.success, payload })
const getPostsFailure = payload => ({ type: GetPosts.failure, payload })

export const getPosts = () => async dispatch => {
  try {
    dispatch(getPostsStart())

    const apiCall = await API.getPosts()
    const dataApi = await apiCall.json()

    dispatch(getPostsSuccess(dataApi.posts))
  } catch (err) {
    dispatch(getPostsFailure('500 internal server error'))
  }
}
