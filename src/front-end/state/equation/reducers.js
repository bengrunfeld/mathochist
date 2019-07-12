import { UPDATE_EQUATION } from './types'

export const equation = (state = 0, action) =>
  action.type === UPDATE_EQUATION ? action.payload : state

export default {}
