import { combineReducers } from 'redux'
import posts from './setPostsReducer'
import mainPost from './setMainPostReducer'
import infoPost from './setInfoPostReducer'
import category from './setCategoryReducer'
import selectedCategory from './SelectedCategoryReducer'


export default combineReducers({
  posts,
  mainPost,
  infoPost,
  category,
  selectedCategory
})
