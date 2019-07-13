import score from './score'
import time from './time'
import playerName from './playerName'
import equation from './equation'
import solutionInput from './solutionInput'

export default { score, time, playerName, equation, solutionInput }

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
