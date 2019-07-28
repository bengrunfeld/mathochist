import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StartGameDiv } from './styles'
import $ from 'jquery'
import updateName from '../../state/playerName/actions'
import updateTime from '../../state/time/actions'

const StartGameModal = ({
  score,
  updateName,
  time,
  updateTime,
  playerName,
  isGameStart
}) => {
  useEffect(() => {
    $('#gameStartModal').modal('show')
  })

  return (
    <div>
      <div className='modal fade' id='gameStartModal'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='gameStartModalLabel'>
                Welcome to Mathochist!
              </h5>
              <button type='button' className='close' data-dismiss='modal'>
                <span>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <p>
                Please enter your name and game settings, and then hit Start
                when you're ready to begin.
              </p>
              <div>
                <input
                  type='text'
                  placeholder='name'
                  value={playerName}
                  onChange={e => updateName(e.target.value)}
                  onFocus={e => e.target.select()}
                />
              </div>
              <div>
                <input
                  type='number'
                  placeholder='Enter time'
                  value={time}
                  onChange={e => updateTime(parseInt(e.target.value || 0))}
                  onFocus={e => e.target.select()}
                />
              </div>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-primary'>
                Start!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ playerName, time, maxValue }) => ({
  playerName,
  time,
  maxValue
})

const mapDispatchToProps = { updateName, updateTime }

// StartGameModal.defaultProps = {
//   score: 0
// }

// StartGameModal.propTypes = {
//   score: PropTypes.number
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartGameModal)
