import React from 'react'
import Navbar from '../Navbar'
import PageLayout from '../PageLayout'
import Footer from '../Footer'

import './styles.css'

import 'bootstrap'

import '../../css/resets.css'
import '../../css/fonts.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const App = () => (
  <div>
    <Navbar />
    <PageLayout />
    <Footer />
  </div>
)

export default App