const solveEquation = e => {
  if (e.operator === '*') return e.operands[0] * e.operands[1]
  if (e.operator === '/') return e.operands[0] / e.operands[1]
  if (e.operator === '-') return e.operands[0] - e.operands[1]
  if (e.operator === '+') return e.operands[0] + e.operands[1]

  throw 'ERROR: solveEquation - no valid operator given'
}

export default solveEquation

// e stands for equation. Just easier this way on the typey typey ;)
