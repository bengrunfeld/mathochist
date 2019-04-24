import React from 'react'
import Navbar from '../Navbar'
import PageLayout from '../PageLayout'
import Footer from '../Footer'
import { Map } from 'immutable'

import { connect } from 'react-redux'

import './styles.css'

import 'bootstrap'

import '../../assets/css/resets.css'
import '../../assets/css/fonts.css'
import '../../assets/css/typography.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = ({ time }) => (
  <div>
    <h3>The time is: {time}</h3>
    <Navbar />
    <PageLayout />
    <Footer />
  </div>
)

const mapStateToProps = state => ({ time: state.time })

export default connect(mapStateToProps)(App)
