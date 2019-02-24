import API from '../../api'
import { GetMainPost } from '../types'

const getPostStart = () => ({ type: GetMainPost.start })
const getPostSuccess = payload => ({ type: GetMainPost.success, payload })
const getPostFailure = payload => ({ type: GetMainPost.failure, payload })

export const getMainPost = () => async dispatch => {
  try {
    dispatch(getPostStart())

    const apiCall = await API.getMainPost()
    const dataApi = await apiCall.json()

    console.log(999,dataApi);

    dispatch(getPostSuccess(dataApi))
  } catch (err) {
    dispatch(getPostFailure('500 internal server error'))
  }
}
