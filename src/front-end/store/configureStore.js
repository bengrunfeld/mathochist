import { createStore, combineReducers } from 'redux'
// import reducers from '../containers'

const time = (state = 0, action) =>
  action.type === 'update' ? action.payload : state

const configureStore = initialState =>
  createStore(combineReducers({ time }), initialState)

export default configureStore

// We'd do this if we wanted to implement Redux Sagas
// import reduxSagas from 'redux-sagas'
// return createStore(rootReducer, initialState, applyMiddleware(reduxSagas))
