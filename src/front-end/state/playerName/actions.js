import { UPDATE_NAME } from './types'

const updateName = data => ({
  type: UPDATE_NAME,
  payload: data
})

export default updateName
