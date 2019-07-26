import { createStore, combineReducers } from 'redux'
import reducers from '../state'
import initialState from './initialState'

const rootReducer = combineReducers(reducers)

const configureStore = initialState => createStore(rootReducer, initialState)

const store = configureStore(initialState)

export default store

// If we want to implement Sagas, do the following
// import reduxSagas from 'redux-sagas'
// return createStore(rootReducer, initialState, applyMiddleware(reduxSagas))
