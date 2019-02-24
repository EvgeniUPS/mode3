import API from '../../api'
import { GetCategory } from '../types'

const getCategoryStart = () => ({ type: GetCategory.start })
const getCategorySuccess = payload => ({ type: GetCategory.success, payload })
const getCategoryFailure = payload => ({ type: GetCategory.failure, payload })

export const getCategory = () => async dispatch => {
  try {
    dispatch(getCategoryStart())

    const apiCall = await API.getCategory()
    const dataApi = await apiCall.json()


    dispatch(getCategorySuccess(dataApi.category))
  } catch (err) {
    dispatch(getCategoryFailure('500 internal server error'))
  }
}
