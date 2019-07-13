import equation from './equation'
import playerName from './playerName'
import result from './result'
import score from './score'
import solutionInput from './solutionInput'
import time from './time'

export default {
  equation,
  playerName,
  result,
  score,
  solutionInput,
  time
}

/* 
  Note to self... 

  Reducers need to be named the same as the slices of state 
  that they operate on, so that we can use ES6 destructuring.

  combineReducers takes the state property that you want to
  work on as the key, and the reducer you want to change that
  bit of state as the value, so naming them the same way saves
  some time, if you remember how it all works.

  E.g. if we want to operate on the slice of state known as time

  Without destructuing:
  combineReducers({time: updateTimeReducer})

  With destructuring:
  combineReducers({time})
*/
