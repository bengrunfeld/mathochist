import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BoxContainer, BoxButton, Triangle } from './styles'
import updateResult from '../../state/result/actions'
import solveEquation from '../../utils/solveEquation'

const SolutionSubmit = ({ width, equation, solutionInput, dispatch }) => (
  <BoxContainer className={width}>
    <BoxButton
      className='float-right'
      onClick={handleSubmitSolution.bind(
        this,
        dispatch,
        equation,
        solutionInput
      )}>
      <Triangle />
    </BoxButton>
  </BoxContainer>
)

const handleSubmitSolution = (dispatch, equation, solutionInput) => {
  if (solutionInput === '') return

  console.log('1.', equation)

  const correctSolution = solveEquation(equation)
  const result = correctSolution.toString() === solutionInput

  console.log('2.', correctSolution)
  console.log('3.', solutionInput)
  console.log('4.', result)

  dispatch(updateResult(result))
}

const mapStateToProps = state => ({
  equation: state.equation,
  solutionInput: state.solutionInput
})

SolutionSubmit.defaultProps = {
  width: ''
}

SolutionSubmit.propTypes = {
  equation: PropTypes.object,
  width: PropTypes.string,
  solutionInput: PropTypes.string
}

export default connect(mapStateToProps)(SolutionSubmit)
