import { UPDATE_USER_INPUT } from './types'

export const userInput = (state = '', action) =>
  action.type === UPDATE_USER_INPUT ? action.payload : state

export default {}
