import { UPDATE_RESULT } from './types'

export const result = (state = false, action) =>
  action.type === UPDATE_RESULT ? action.payload : state

export default {}
