import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StatsBox from '../StatsBox'

import { ScoreContainer, Caption } from './styles'

const Score = ({ score }) => (
  <ScoreContainer>
    <StatsBox data={score} />
    <Caption>Score</Caption>
  </ScoreContainer>
)

const mapStateToProps = state => ({ score: state.score })

Score.defaultProps = {
  score: 0
}

Score.propTypes = {
  score: PropTypes.number
}

export default connect(mapStateToProps)(Score)
