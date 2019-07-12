import { UPDATE_SCORE } from './types'

const updateScore = data => ({
  type: UPDATE_SCORE,
  payload: data
})

export default { updateScore }
