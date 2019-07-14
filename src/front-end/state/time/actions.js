import types from './types'

const updateTime = data => ({
  type: types.UPDATE_TIME,
  payload: data
})

export default updateTime
