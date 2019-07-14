// NOTE: This is not the main function being exported! That's below
const convertToReadableOperator = operator => {
  if (operator === '*') return '×'
  if (operator === '/') return '÷'

  return operator
}

const makeEquationReadable = equation => {
  const operator = convertToReadableOperator(equation.operator)

  return `${equation.operands[0]} ${operator} ${equation.operands[1]}`
}

export default makeEquationReadable
