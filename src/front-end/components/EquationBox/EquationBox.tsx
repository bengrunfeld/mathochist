import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { BoxContainer, BoxText } from './styles'

const EquationBox = ({ equation }) => (
  <BoxContainer>
    <BoxText>{equation}</BoxText>
  </BoxContainer>
)

const mapStateToProps = state => ({
  equation: state.equation
})

EquationBox.defaultProps = {
  equation: '1 x 1'
}

EquationBox.propTypes = {
  equation: PropTypes.string
}

export default connect(mapStateToProps)(EquationBox)
