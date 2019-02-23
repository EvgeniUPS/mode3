import { combineReducers } from 'redux'
import posts from './setPostsReducer'
import mainPost from './setMainPostReducer'

export default combineReducers({
  posts,
  mainPost
})
