import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import updateUserInput from '../../state/userInput/actions'
// import submitSolution from '../../state/answer/actions'

import { BoxContainer, Solution } from './styles'

const handleKeyPress = (key, val) => {
  if (key === 'Enter') {
    console.log('>>> Submit Solution', val)
    // submitSolution()
  }
}

const SolutionInput = ({ width, userInput, updateInput }) => (
  <BoxContainer className={width}>
    <Solution
      type='text'
      value={userInput}
      placeholder='Enter solution...'
      onChange={e => updateInput(e.target.value)}
      onKeyPress={e => handleKeyPress(e.key, e.target.value)}
    />
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
