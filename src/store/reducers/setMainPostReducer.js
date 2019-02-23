import { GetMainPost } from '../types'

const initialState = {
  isFetch: false,
  error: '',
  post: null,
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GetMainPost.start:
      return { ...state, isFetch: true }
    case GetMainPost.success:
      return {
        ...state,
        isFetch: false,
        post: payload,
        error: '',
      }
    case GetMainPost.failure:
      return { ...state, isAuth: false, isFetch: false, error: payload }
    default:
      return state
  }
}
