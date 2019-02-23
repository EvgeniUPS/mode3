export default {
  getPosts() {
    return fetch('posts.json')
  },
  getMainPost() {
    return fetch('mainPost.json')
  },
  // id
  // /post/${id}
  getInfoPost() {
    return fetch('infoPost.json')
  }
}
