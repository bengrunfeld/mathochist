import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import updateSolutionInput from '../../state/solutionInput/actions'
// import submitSolution from '../../state/answer/actions'

import { BoxContainer, Solution } from './styles'

const handleKeyPress = (key, val) => {
  if (key === 'Enter') {
    console.log('>>> Submit Solution', val)
    // submitSolution()
  }
}

const SolutionInput = ({ width, solutionInput, updateSolutionInput }) => (
  <BoxContainer className={width}>
    <Solution
      type='text'
      value={solutionInput}
      placeholder='Enter solution...'
      onChange={e => updateSolutionInput(e.target.value)}
      onKeyPress={e => handleKeyPress(e.key, e.target.value)}
    />
  </BoxContainer>
)

const mapStateToProps = state => ({ solutionInput: state.solutionInput })
const mapDispatchToProps = { updateSolutionInput }

SolutionInput.defaultProps = {
  width: 'col-8'
}

SolutionInput.propTypes = {
  width: PropTypes.string,
  solutionInput: PropTypes.string
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SolutionInput)
