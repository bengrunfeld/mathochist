import React from 'react'
import Navbar from '../Navbar'
import PageLayout from '../PageLayout'
import Footer from '../Footer'
import { Map } from 'immutable'

import './styles.css'

import 'bootstrap'

import '../../assets/css/resets.css'
import '../../assets/css/fonts.css'
import '../../assets/css/typography.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  const map1 = Map({ a: 1, b: 2, c: 3 })
  const map2 = map1.set('b', 50)
  console.log('----------->>> App: Immutable')
  console.log(map1.get('b') + " vs. " + map2.get('b')) // 2 vs. 50

  return (
  <div>
    <Navbar />
    <PageLayout />
    <Footer />
  </div>
  )
}

export default App