import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Router from '../Router'
import initialState from '../../store/initialState'

import configureStore from '../../store'

const store = configureStore(initialState)

const ProviderWrapper = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default ProviderWrapper
