import { GetComment } from '../types'

const initialState = {
  isFetch: false,
  error: '',
  comments: null,
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GetComment.start:
      return { ...state, isFetch: true }
    case GetComment.success:
      return {
        ...state,
        isFetch: false,
        comments: payload,
        error: '',
      }
    case GetComment.failure:
      return { ...state, isAuth: false, isFetch: false, error: payload }
    default:
      return state
  }
}
