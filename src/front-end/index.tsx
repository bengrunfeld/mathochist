import React from 'react'
import ReactDOM from 'react-dom'
import ProviderWrapper from './components/ProviderWrapper'

ReactDOM.render(
  <ProviderWrapper />,
  document.getElementById('react-container') // eslint-disable-line no-undef
)

if (module.hot)
  // eslint-disable-line no-undef
  module.hot.accept() // eslint-disable-line no-undef
