import store from '../store'
import updateScore from '../state/score/actions'
import updateEquation from '../state/equation/actions'
import updateResult from '../state/result/actions'
import generateEquation from './generateEquation'
import updateSolutionInput from '../state/solutionInput/actions'
import solveEquation from './solveEquation'

const handleSubmitSolution = solutionInput => {
  if (solutionInput === '') return

  const { dispatch, getState } = store
  const { equation, score, settings } = getState()

  const correctSolution = solveEquation(equation)
  const result = correctSolution.toString() === solutionInput

  dispatch(updateResult(result))

  if (result) dispatch(updateScore(score + 1))

  const newEquation = generateEquation(settings)

  dispatch(updateEquation(newEquation))

  dispatch(updateSolutionInput(''))
}

export default handleSubmitSolution
