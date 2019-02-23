import { combineReducers } from 'redux'
import posts from './setPostsReducer'
import mainPost from './setMainPostReducer'
import infoPost from './setInfoPostReducer'

export default combineReducers({
  posts,
  mainPost,
  infoPost
})
