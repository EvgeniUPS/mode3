import API from '../../api'
import { GetInfoPost, GetComment } from '../types'


const getInfoPostStart = () => ({ type: GetInfoPost.start })
const getInfoPostSuccess = payload => ({ type: GetInfoPost.success, payload })
const getInfoPostFailure = payload => ({ type: GetInfoPost.failure, payload })
const getCommentStart = () => ({ type: GetComment.start })
const getCommentSuccess = payload => ({ type: GetComment.success, payload })
const getCommentFailure = payload => ({ type: GetComment.failure, payload })

export const getInfoPost = (id, history) => async dispatch => {
  try {
    dispatch(getInfoPostStart())

    const apiCall = await API.getInfoPost(id)
    const dataApi = await apiCall.json()

    console.log(id)
    console.log(444, dataApi)

    dispatch(getInfoPostSuccess(dataApi))
    history.push('/info')
  } catch (err) {
    dispatch(getInfoPostFailure('500 internal server error'))
  }
}

export const getInfoComment = (id, history) => async dispatch => {
  try {
    dispatch(getCommentStart())

    const apiCall = await API.getCommentPost(id)
    const dataApi = await apiCall.json()

    console.log(id)
    console.log(444, dataApi)

    dispatch(getCommentSuccess(dataApi))
  } catch (err) {
    dispatch(getCommentFailure('500 internal server error'))
  }
}
