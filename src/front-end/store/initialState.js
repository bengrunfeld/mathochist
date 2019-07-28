import { RANDOM_ARITHMETIC } from './constants'

const initialState = {
  time: 60,
  score: 0,
  playerName: 'Your name',
  equation: { operands: [1, 1], operator: '+' },
  solutionInput: '',
  result: false,
  settings: {
    numOperands: 2,
    operator: RANDOM_ARITHMETIC,
    time: 60,
    maxValue: 50
  }
}

export default initialState
