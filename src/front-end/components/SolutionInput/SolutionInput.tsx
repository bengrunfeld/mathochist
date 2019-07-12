import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import updateUserInput from '../../state/userInput/actions'

import { BoxContainer, BoxText } from './styles'

const SolutionInput = ({ width, userInput, updateInput }) => (
  <BoxContainer className={width}>
    <input type='text' value={userInput} onChange={updateInput} />
  </BoxContainer>
)

// updateInput.bind(this, e.target.userInput)

const mapStateToProps = state => ({ userInput: state.userInput })

const mapDispatchToProps = {
  updateInput: updateUserInput
}

SolutionInput.defaultProps = {
  width: 'col-8',
  userInput: '222'
}

SolutionInput.propTypes = {
  width: PropTypes.string,
  userInput: PropTypes.string
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SolutionInput)
