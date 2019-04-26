import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Router from '../Router'

import configureStore from '../../store'

const initialState = { time: 55, goals: 2 }

const store = configureStore(initialState)

const ProviderWrapper = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default ProviderWrapper
