import { GetPosts } from '../types'

const initialState = {
  isFetch: false,
  error: '',
  posts: null,
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GetPosts.start:
      return { ...state, isFetch: true }
    case GetPosts.success:
      return {
        ...state,
        isFetch: false,
        posts: payload,
        error: '',
      }
    case GetPosts.failure:
      return { ...state, isAuth: false, isFetch: false, error: payload }
    default:
      return state
  }
}
