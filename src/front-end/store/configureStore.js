import { createStore, combineReducers } from 'redux'
// import reducers from '../containers'
import reducers from '../containers/time/reducers'

const configureStore = initialState => createStore(reducers, initialState)

export default configureStore

// We'd do this if we wanted to implement Redux Sagas
// import reduxSagas from 'redux-sagas'
// return createStore(rootReducer, initialState, applyMiddleware(reduxSagas))
