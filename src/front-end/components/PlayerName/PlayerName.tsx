import React from 'react'
import PropTypes from 'prop-types'

const PlayerName = ({ playerName }) => (
  <div className='col-6'>
    <h3>Player</h3>
    <p>{playerName}</p>
  </div>
)

PlayerName.defaultProps = {
  playerName: 'Name not set...'
}

PlayerName.propTypes = {
  playerName: PropTypes.string
}

export default PlayerName
