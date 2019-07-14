import store from '../store'
import updateScore from '../state/score/actions'
import updateTime from '../state/time/actions'
import updateEquation from '../state/equation/actions'
import updateResult from '../state/result/actions'
import generateEquation from './generateEquation'
import startTimer from './startTimer'

const startGame = settings => {
  const { dispatch } = store

  // Set score to zero
  dispatch(updateScore(0))

  // Set time
  dispatch(updateTime(settings.time))

  // Set result to false
  dispatch(updateResult(false))

  // Set first equation
  const equation = generateEquation(settings)

  console.log('>>> 0', equation)

  dispatch(updateEquation(equation))

  // Start timer loop
  startTimer(settings.time)
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
