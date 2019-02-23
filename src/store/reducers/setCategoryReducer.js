import { GetCategory } from '../types'

const initialState = {
  isFetch: false,
  error: '',
  category: null,
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GetCategory.start:
      return { ...state, isFetch: true }
    case GetCategory.success:
      return {
        ...state,
        isFetch: false,
        category: payload,
        error: '',
      }
    case GetCategory.failure:
      return { ...state, isAuth: false, isFetch: false, error: payload }
    default:
      return state
  }
}
