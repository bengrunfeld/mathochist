import { UPDATE_SETTINGS } from './types'

export const settings = (state = 0, action) =>
  action.type === UPDATE_SETTINGS ? action.payload : state

export default {}
