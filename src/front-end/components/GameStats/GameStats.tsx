import React from 'react'

import GameTime from '../GameTime'
import Score from '../Score'

import { GameStatsContainer } from './styles'

const GameStats = () => (
  <GameStatsContainer className='col-6 d-flex justify-content-end'>
    <GameTime />
    <Score />
  </GameStatsContainer>
)

export default GameStats
