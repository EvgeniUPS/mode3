export default {
  getPosts() {
    // id
    // /post/${id}
    return fetch('posts.json')
  },
  getMainPost() {
    return fetch('mainPost.json')
  },
  // id
  // /post/${id}
  getInfoPost() {
    return fetch('infoPost.json')
  },
  getCategory() {
    return fetch('category.json')
  },
  signIn(data) {
    return fetch('signIn', {
      method: 'POST',
      body: data
    })
  },
}
