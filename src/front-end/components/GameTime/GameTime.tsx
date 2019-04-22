import React from 'react'
import StatsBox from '../StatsBox'

import { GameTimeContainer, Caption } from './styles'

const GameTime = ({ time }) => (
  <GameTimeContainer>
    <StatsBox data={time} />
    <Caption>Time</Caption>
  </GameTimeContainer>
)

export default GameTime
