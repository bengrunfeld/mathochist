import { UPDATE_SOLUTION_INPUT } from './types'

export const solutionInput = (state = '', action) =>
  action.type === UPDATE_SOLUTION_INPUT ? action.payload : state

export default {}
