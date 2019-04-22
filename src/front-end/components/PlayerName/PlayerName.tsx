import React from 'react'
import PropTypes from 'prop-types'

import { Title, Name } from './styles'

const PlayerName = ({ playerName }) => (
  <div className='col-6'>
    <Title>Player:</Title>
    <Name>{playerName}</Name>
  </div>
)

PlayerName.defaultProps = {
  playerName: 'Beynish'
}

PlayerName.propTypes = {
  playerName: PropTypes.string
}

export default PlayerName
