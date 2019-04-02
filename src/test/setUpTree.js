import React from 'react'

const setUpTree = (Component, Router, mount) => mount(
  <Router initialEntries={[ { pathname: '/', key: 'testKey' } ]}>
    <Component />
  </Router>
)

export default setUpTree