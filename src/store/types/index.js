const START = 'START'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

// const CATEGORY = 'CATEGORY_'
const POSTS = 'POSTS '
const MAIN_POST = 'MAIN_POST '

export const GetPosts = {
  start: POSTS + START,
  success: POSTS + SUCCESS,
  failure: POSTS + FAILURE
}
export const GetMainPost = {
  start: MAIN_POST + START,
  success: MAIN_POST + SUCCESS,
  failure: MAIN_POST + FAILURE
}
