import React from 'react'
import Navbar from '../Navbar'
import PageLayout from '../PageLayout'

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
      <PageLayout />
    </div>
  )
}

export default App