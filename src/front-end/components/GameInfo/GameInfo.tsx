import React from 'react'

import PlayerName from '../PlayerName'
import GameStats from '../GameStats'

import { GameInfoContainer } from './styles'

const GameInfo = () => (
  <GameInfoContainer className='row no-gutters'>
    <PlayerName />
    <GameStats />
  </GameInfoContainer>
)

export default GameInfo
