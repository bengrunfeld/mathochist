import React from 'react'
import ReactDOM from 'react-dom'
import Router from './components/Router'

ReactDOM.render(
  <Router />,
  document.getElementById('react-container') // eslint-disable-line no-undef
)

if (module.hot) {
  // eslint-disable-line no-undef
  console.log('module hot is getting reached')
  module.hot.accept() // eslint-disable-line no-undef
}
