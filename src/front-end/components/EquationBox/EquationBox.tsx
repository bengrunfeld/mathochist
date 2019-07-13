import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { BoxContainer, BoxText } from './styles'

const EquationBox = ({ equation }) => {
  const humanReadableEquation = makeReadable(equation)

  return (
    <BoxContainer>
      <BoxText>{humanReadableEquation}</BoxText>
    </BoxContainer>
  )
}

const makeReadable = equation => {
  const readableOperator = convertToReadableOperator(equation.operator)

  return `${equation.firstArg} ${readableOperator} ${equation.secondArg}`
}

const convertToReadableOperator = operator => {
  if (operator === '*') return '×'
  if (operator === '/') return '÷'

  return operator
}

const mapStateToProps = state => ({
  equation: state.equation
})

EquationBox.defaultProps = {
  equation: '1 x 1'
}

EquationBox.propTypes = {
  equation: PropTypes.object
}

export default connect(mapStateToProps)(EquationBox)
