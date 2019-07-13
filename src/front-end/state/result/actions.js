import { UPDATE_RESULT } from './types'

const updateResult = data => {
  console.log('\n-->> updateResult')
  return {
    type: UPDATE_RESULT,
    payload: data
  }
}

export default updateResult
