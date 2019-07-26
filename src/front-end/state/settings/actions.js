import { UPDATE_SETTINGS } from './types'

const updateSettings = data => ({
  type: UPDATE_SETTINGS,
  payload: data
})

export default updateSettings
