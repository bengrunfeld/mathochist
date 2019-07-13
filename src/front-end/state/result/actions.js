import { UPDATE_RESULT } from './types'

const updateResult = data => ({
  type: UPDATE_RESULT,
  payload: data
})

export default updateResult
