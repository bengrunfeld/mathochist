const solveEquation = e => {
  if (e.operator === '*') return e.firstArg * e.secondArg
  if (e.operator === '/') return e.firstArg / e.secondArg
  if (e.operator === '-') return e.firstArg - e.secondArg
  if (e.operator === '+') return e.firstArg + e.secondArg

  throw 'ERROR: solveEquation - no valid operator given'
}

export default solveEquation

// e stands for equation. Just easier this way on the typey typey ;)
