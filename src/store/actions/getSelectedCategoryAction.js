import API from '../../api'
import { GetSelectedCategory } from '../types'

const getSelectedCategoryStart = () => ({ type: GetSelectedCategory.start })
const getSelectedCategorySuccess = payload => ({ type: GetSelectedCategory.success, payload })
const getSelectedCategoryFailure = payload => ({ type: GetSelectedCategory.failure, payload })

export const getSelectedCategory = (name) => async dispatch => {
  try {
    dispatch(getSelectedCategoryStart())

    const apiCall = await API.selectCategory(name)
    const dataApi = await apiCall.json()
    console.log(dataApi)
    console.log(name)

    dispatch(getSelectedCategorySuccess(dataApi))
  } catch (err) {
    dispatch(getSelectedCategoryFailure('500 internal server error'))
  }
}
