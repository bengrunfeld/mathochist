import React from 'react'
import Navbar from '../Navbar'
import MainContent from '../MainContent'
import Footer from '../Footer'

import './styles.css'

import 'bootstrap'

import '../../css/resets.css'
import '../../css/fonts.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const App = () => (
  <div>
    <Navbar />
    <MainContent />
    <Footer />
  </div>
)

export default App