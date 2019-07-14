const initialState = {
  time: 60,
  score: 0,
  playerName: 'Ben G',
  equation: { operands: [1, 1], operator: '+' },
  solutionInput: '',
  result: false,
  settings: {
    numOperands: 2,
    operator: 'arithmetic',
    time: 60,
    maxValue: 12
  }
}

export default initialState
