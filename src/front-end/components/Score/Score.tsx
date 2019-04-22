import React from 'react'
import PropTypes from 'prop-types'

import StatsBox from '../StatsBox'

import { ScoreContainer, Caption } from './styles'

const Score = ({ playerScore }) => (
  <ScoreContainer>
    <StatsBox data={playerScore} statsType='score' />
    <Caption>Score</Caption>
  </ScoreContainer>
)

Score.defaultProps = {
  playerScore: '0'
}

Score.propTypes = {
  playerScore: PropTypes.string
}

export default Score
