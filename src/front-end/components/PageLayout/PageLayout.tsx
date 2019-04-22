import React from 'react'
import GameScreen from '../GameScreen'
import { Gutter } from './styles'

const PageLayout = () => (
  <div className='container-fluid'>
    <div className='row'>
      <Gutter className='col-lg-3' />
      <GameScreen />
      <Gutter className='col-lg-3' />
    </div>
  </div>
)

export default PageLayout
