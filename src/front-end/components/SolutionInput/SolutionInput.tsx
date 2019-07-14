import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import updateSolutionInput from '../../state/solutionInput/actions'
import updateResult from '../../state/result/actions'
import solveEquation from '../../utils/solveEquation'

import { BoxContainer, Solution } from './styles'

const handleKeyPress = (key, solutionInput, equation, updateResult) => {
  if (key === 'Enter') {
    if (solutionInput === '') return

    const correctSolution = solveEquation(equation)
    const result = correctSolution.toString() === solutionInput

    updateResult(result)
  }
}

const SolutionInput = ({
  width,
  solutionInput,
  updateSolutionInput,
  updateResult,
  equation
}) => (
  <BoxContainer className={width}>
    <Solution
      type='text'
      value={solutionInput}
      placeholder='Enter solution...'
      onChange={e => updateSolutionInput(e.target.value)}
      onKeyPress={e =>
        handleKeyPress(e.key, e.target.value, equation, updateResult)
      }
    />
  </BoxContainer>
)

const mapStateToProps = state => ({
  solutionInput: state.solutionInput,
  equation: state.equation
})

const mapDispatchToProps = { updateSolutionInput, updateResult }

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
