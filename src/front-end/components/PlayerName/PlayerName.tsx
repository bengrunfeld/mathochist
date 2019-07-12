import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { PlayerNameContainer, Title, Name } from './styles'

const PlayerName = ({ playerName }) => (
  <PlayerNameContainer className='col-6'>
    <Title>Player:</Title>
    <Name>{playerName}</Name>
  </PlayerNameContainer>
)

const mapStateToProps = state => ({
  playerName: state.playerName
})

PlayerName.defaultProps = {
  playerName: 'Beni'
}

PlayerName.propTypes = {
  playerName: PropTypes.string
}

export default connect(mapStateToProps)(PlayerName)
