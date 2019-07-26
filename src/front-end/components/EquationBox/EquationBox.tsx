import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import makeEquationReadable from '../../utils/makeEquationReadable'
import { BoxContainer, BoxText } from './styles'

const EquationBox = ({ equation }) => {
  const humanReadableEquation = makeEquationReadable(equation)

  return (
    <BoxContainer>
      <BoxText>{humanReadableEquation}</BoxText>
    </BoxContainer>
  )
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
