import React from 'react'
import GameScreen from '../GameScreen'
import { Gutter } from './styles'

const PageLayout = () => (
  <div className='container-fluid'>
    <div className='row'>
      <Gutter className='col-md-3' />
      <GameScreen width='col-md-6' />
      <Gutter className='col-md-3' />
    </div>
  </div>
)

export default PageLayout
