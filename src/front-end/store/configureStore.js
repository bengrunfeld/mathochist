import { createStore, combineReducers } from 'redux'
import reducers from '../containers'

const configureStore = initialState =>
  createStore(combineReducers(reducers), initialState)

export default configureStore

// We'd do this if we wanted to implement Redux Sagas
// import reduxSagas from 'redux-sagas'
// return createStore(rootReducer, initialState, applyMiddleware(reduxSagas))
