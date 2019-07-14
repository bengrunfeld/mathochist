import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import PageLayout from '../PageLayout'
import Footer from '../Footer'
import startGame from '../../utils/startGame'

import { connect } from 'react-redux'

import './styles.css'

import 'bootstrap'

import '../../assets/css/resets.css'
import '../../assets/css/fonts.css'
import '../../assets/css/typography.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  useEffect(() => {
    startGame()
  })

  return (
    <div>
      <Navbar />
      <PageLayout />
      <Footer />
    </div>
  )
}

export default App
