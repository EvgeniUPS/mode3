const START = 'START'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

// const CATEGORY = 'CATEGORY_'
const POSTS = 'POSTS '
const CATEGORY = 'CATEGORY'
const MAIN_POST = 'MAIN_POST '
const INFO_POST = 'INFO_POST '
const SELECTED_CATEGORY = 'SELECTED_CATEGORY '

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
export const GetInfoPost = {
  start: INFO_POST + START,
  success: INFO_POST + SUCCESS,
  failure: INFO_POST + FAILURE
}
export const GetCategory = {
  start: CATEGORY + START,
  success: CATEGORY + SUCCESS,
  failure: CATEGORY + FAILURE
}
export const GetSelectedCategory = {
  start: SELECTED_CATEGORY + START,
  success: SELECTED_CATEGORY + SUCCESS,
  failure: SELECTED_CATEGORY + FAILURE
}
