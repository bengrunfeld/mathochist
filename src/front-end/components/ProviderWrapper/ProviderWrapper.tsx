import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Router from '../Router'
import store from '../../store'

const ProviderWrapper = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default ProviderWrapper
