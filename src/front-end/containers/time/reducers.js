import { combineReducers } from 'redux'
import types from './types'

const time = (state = 0, action) =>
  action.type === types.UPDATE_TIME ? action.payload : state

const counter = (state = 0, action) =>
  action.type === types.UPDATE_TIME ? action.payload : state

export default combineReducers({
  time,
  counter
})
