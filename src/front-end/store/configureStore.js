import { createStore, combineReducers } from 'redux'
import reducers from '../state'

const rootReducer = combineReducers(reducers)

const configureStore = initialState => createStore(rootReducer, initialState)

export default configureStore

// If we want to implement Sagas, do the following
// import reduxSagas from 'redux-sagas'
// return createStore(rootReducer, initialState, applyMiddleware(reduxSagas))
