import { UPDATE_NAME } from './types'

export const playerName = (state = 0, action) =>
  action.type === UPDATE_NAME ? action.payload : state

export default {}
