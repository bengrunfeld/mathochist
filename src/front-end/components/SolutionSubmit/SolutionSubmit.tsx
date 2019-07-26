import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BoxContainer, BoxButton, Triangle } from './styles'
import updateResult from '../../state/result/actions'
import updateScore from '../../state/score/actions'
import solveEquation from '../../utils/solveEquation'
import handleSubmitSolution from '../../utils/handleSubmitSolution'

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
      onClick={handleSubmitSolution.bind(this, solutionInput)}>
      <Triangle />
    </BoxButton>
  </BoxContainer>
)

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
