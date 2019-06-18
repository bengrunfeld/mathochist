import types from './types'

export const score = (state = 0, action) =>
  action.type === types.UPDATE_TIME ? action.payload : state

export const winner = (state = 0, action) =>
  action.type === types.UPDATE_TIME ? action.payload : state

export const loser = (state = 0, action) =>
  action.type === types.UPDATE_TIME ? action.payload : state

export default {}
