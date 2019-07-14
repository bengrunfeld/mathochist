import store from '../store'
import updateResult from '../state/result/actions'
import generateEquation from './generateEquation'

const startGame = timeLeft => {
  const { dispatch } = store

  // Set score to zero
  dispatch(updateScore(0))

  // Set time to 60
  dispatch(updateTime(60))

  // Set first equation
  const settings = {}
  const equation = generateEquation(settings)
  dispatch(updateEquation(equation))

  // Set result to waiting
  dispatch(updateResult(false))

  // Start timer loop
  startTimer(timeLeft || 60)
}

export default startGame

/*

  To Start Game:

  * Set score to zero
  * Set time to timeLeft || 60
  * Start timer loop
  * Set first equation
  * Set result to waiting

*/
