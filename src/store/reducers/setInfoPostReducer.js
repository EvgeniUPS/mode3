import { GetInfoPost } from '../types'

const initialState = {
  isFetch: false,
  error: '',
  post: null,
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GetInfoPost.start:
      return { ...state, isFetch: true }
    case GetInfoPost.success:
      console.log(555,payload)
      return {
        ...state,
        isFetch: false,
        post: payload,
        error: '',
      }
    case GetInfoPost.failure:
      return { ...state, isAuth: false, isFetch: false, error: payload }
    default:
      return state
  }
}
