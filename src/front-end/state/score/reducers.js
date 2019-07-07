import { UPDATE_SCORE } from './types'

export const score = (state = 0, action) =>
  action.type === UPDATE_SCORE ? action.payload : state

export default {}
