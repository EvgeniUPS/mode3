export default {
  getPosts() {
    return fetch('posts.json')
  },
  getMainPost() {
    return fetch('mainPost.json')
  }
}
