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

const App = ({ time, goals, points }) => (
  <div>
    <h3>The time is: {time}</h3>
    <p>
      Score is: {goals} goals and {points} points
    </p>
    <Navbar />
    <PageLayout />
    <Footer />
  </div>
)

const mapStateToProps = state => ({
  time: state.time,
  goals: state.goals,
  points: state.points
})

const mapDispatchToProps = {
  fetchData: 'hello'
}

export default connect(mapStateToProps)(App)
