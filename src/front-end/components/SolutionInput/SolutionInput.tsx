import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import updateSolutionInput from '../../state/solutionInput/actions'
import updateResult from '../../state/result/actions'
import solveEquation from '../../utils/solveEquation'
import handleSubmitSolution from '../../utils/handleSubmitSolution'

import { BoxContainer, Solution } from './styles'

const handleKeyPress = (key, solutionInput) => {
  if (key !== 'Enter') return
  if (solutionInput === '') return

  handleSubmitSolution(solutionInput)
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

const mapStateToProps = state => ({
  solutionInput: state.solutionInput
})

const mapDispatchToProps = { updateSolutionInput }

SolutionInput.defaultProps = {
  width: 'col-8'
}

SolutionInput.propTypes = {
  width: PropTypes.string,
  solutionInput: PropTypes.string,
  equation: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SolutionInput)
