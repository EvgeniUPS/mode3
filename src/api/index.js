export default {
  getPosts(page) {
    return fetch(`http://176.114.4.107:8080/post/non-category/${page}`)
  },
  getMainPost() {
    return fetch("http://176.114.4.107:8080/post/main")
  },
  getInfoPost(id) {
    return fetch(`http://176.114.4.107:8080/post/${id}`)
  },
  getCategory() {
    return fetch("http://176.114.4.107:8080/category/all")
  },
  signIn(data) {
    return fetch('signIn', {
      method: 'POST',
      body: data
    })
  },
}
