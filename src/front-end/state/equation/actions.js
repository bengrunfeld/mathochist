import { UPDATE_EQUATION } from './types'

const updateEquation = data => ({
  type: UPDATE_EQUATION,
  payload: data
})

export default { updateEquation }
