import React from 'react'
import Navbar from '../Navbar'
import MainContent from '../MainContent'

import './styles.css'

import 'bootstrap'

import '../../css/resets.css'
import '../../css/fonts.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  console.log('This should issue a warning')

  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  )
}

export default App