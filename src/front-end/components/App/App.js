import React from 'react'
import './styles.css'

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