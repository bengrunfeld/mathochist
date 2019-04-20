import React from 'react'
import App from '../App'
import { BrowserRouter as Router} from 'react-router-dom'

const RouterContainer = () => (
  <Router>
    <App name='Ben Grunfeld' age='39' />
  </Router>
)

export default RouterContainer