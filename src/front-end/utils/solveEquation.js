const solveEquation = e => {
  console.log('>>> se:', e)
  let result = 0

  if (e.operator === '*') result = e.operands[0] * e.operands[1]
  if (e.operator === '/') result = e.operands[0] / e.operands[1]
  if (e.operator === '-') result = e.operands[0] - e.operands[1]
  if (e.operator === '+') result = e.operands[0] + e.operands[1]

  console.log('>>> r:', result)

  return result
}

export default solveEquation

// e stands for equation. Just easier this way on the typey typey ;)
