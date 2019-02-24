import { GetSelectedCategory } from '../types'

const initialState = {
  isFetch: false,
  error: '',
  posts: null,
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GetSelectedCategory.start:
      return { ...state, isFetch: true }
    case GetSelectedCategory.success:
      return {
        ...state,
        isFetch: false,
        posts: payload,
        error: '',
      }
    case GetSelectedCategory.failure:
      return { ...state, isAuth: false, isFetch: false, error: payload }
    default:
      return state
  }
}
