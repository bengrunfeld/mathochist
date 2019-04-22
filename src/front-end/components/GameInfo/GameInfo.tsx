import React from 'react'

import PlayerName from '../PlayerName'
import GameStats from '../GameStats'

import { GameInfoContainer } from './styles'

const GameInfo = () => (
  <GameInfoContainer className='row'>
    <PlayerName />
    <GameStats />
  </GameInfoContainer>
)

export default GameInfo
