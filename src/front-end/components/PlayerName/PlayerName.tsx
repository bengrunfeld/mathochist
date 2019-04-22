import React from 'react'
import PropTypes from 'prop-types'

import { PlayerNameContainer, Title, Name } from './styles'

const PlayerName = ({ playerName }) => (
  <PlayerNameContainer className='col-6'>
    <Title>Player:</Title>
    <Name>{playerName}</Name>
  </PlayerNameContainer>
)

PlayerName.defaultProps = {
  playerName: 'Beni'
}

PlayerName.propTypes = {
  playerName: PropTypes.string
}

export default PlayerName
