import API from '../../api'
import { GetInfoPost } from '../types'

const getInfoPostStart = () => ({ type: GetInfoPost.start })
const getInfoPostSuccess = payload => ({ type: GetInfoPost.success, payload })
const getInfoPostFailure = payload => ({ type: GetInfoPost.failure, payload })

export const getInfoPost = (id, history) => async dispatch => {
  try {
    dispatch(getInfoPostStart())

    const apiCall = await API.getInfoPost()
    const dataApi = await apiCall.json()

    console.log(id)
    console.log(dataApi)

    dispatch(getInfoPostSuccess(dataApi.post))
    history.push('/info')
  } catch (err) {
    dispatch(getInfoPostFailure('500 internal server error'))
  }
}
