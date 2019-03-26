import React from 'react'
import './styles.css'

import 'bootstrap'

import '../../css/resets.css'
import '../../css/fonts.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  console.log('This should issue a warning')

  return (
  <div>
    <h1>Personal Blog</h1>
    <div className='selfie'></div>
    <p>Image and some text - pass snap test</p>
    <h2>A nice subtitle</h2>
  </div>
)}

export default App