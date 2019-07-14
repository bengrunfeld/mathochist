import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BoxContainer, BoxButton, Triangle } from './styles'
import updateResult from '../../state/result/actions'
import updateScore from '../../state/score/actions'
import solveEquation from '../../utils/solveEquation'

const SolutionSubmit = ({
  width,
  equation,
  solutionInput,
  dispatch,
  score
}) => (
  <BoxContainer className={width}>
    <BoxButton
      className='float-right'
      onClick={handleSubmitSolution.bind(
        this,
        dispatch,
        equation,
        solutionInput,
        score
      )}>
      <Triangle />
    </BoxButton>
  </BoxContainer>
)

const handleSubmitSolution = (dispatch, equation, solutionInput, score) => {
  if (solutionInput === '') return

  const correctSolution = solveEquation(equation)
  const result = correctSolution.toString() === solutionInput

  dispatch(updateResult(result))

  console.log('>>> S:', score)

  if (result) dispatch(updateScore(score + 1))
}

const mapStateToProps = state => ({
  equation: state.equation,
  solutionInput: state.solutionInput,
  score: state.score
})

SolutionSubmit.defaultProps = {
  width: ''
}

SolutionSubmit.propTypes = {
  equation: PropTypes.object,
  width: PropTypes.string,
  solutionInput: PropTypes.string,
  score: PropTypes.number
}

export default connect(mapStateToProps)(SolutionSubmit)
