import { UPDATE_USER_INPUT } from './types'

const updateUserInput = data => ({
  type: UPDATE_USER_INPUT,
  payload: data
})

export default { updateUserInput }
