import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StatsBox from '../StatsBox'

import { GameTimeContainer, Caption } from './styles'

const GameTime = ({ time }) => (
  <GameTimeContainer>
    <StatsBox data={time} />
    <Caption>Time</Caption>
  </GameTimeContainer>
)

const mapStateToProps = state => ({ time: state.time })

GameTime.defaultProps = {
  time: 0
}

GameTime.propTypes = {
  time: PropTypes.number
}

export default connect(mapStateToProps)(GameTime)
