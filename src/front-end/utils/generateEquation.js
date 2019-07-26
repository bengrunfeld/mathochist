const generateEquation = settings => {
  if (!settings) throw 'ERROR: No settings were provided.'

  const operands = Array(settings.numOperands)
    .fill()
    .map(() => Math.floor(Math.random() * settings.maxValue) + 1)

  const randomNum1to4 = Math.floor(Math.random() * 4)
  const availableOperators = ['*', '/', '+', '-']
  const operator = availableOperators[randomNum1to4]

  return {
    operands,
    operator
  }
}

export default generateEquation
