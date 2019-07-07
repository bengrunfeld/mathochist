import types from './types'

export const time = (state = 0, action) =>
  action.type === types.UPDATE_TIME ? action.payload : state

export default {}
