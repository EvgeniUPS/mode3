import { combineReducers } from 'redux'
import posts from './setPostsReducer'
import mainPost from './setMainPostReducer'
import infoPost from './setInfoPostReducer'
import category from './setCategoryReducer'

export default combineReducers({
  posts,
  mainPost,
  infoPost,
  category
})
