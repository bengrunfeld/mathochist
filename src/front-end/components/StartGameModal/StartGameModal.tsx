import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { StartGameDiv } from './styles'

const StartGameModal = ({ score }) => (
  <div>
    <button
      type='button'
      className='btn btn-primary'
      data-toggle='modal'
      data-target='#exampleModal'>
      Launch demo modal
    </button>

    <div className='modal fade' id='exampleModal'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Modal title
            </h5>
            <button type='button' className='close' data-dismiss='modal'>
              <span>&times;</span>
            </button>
          </div>
          <div className='modal-body'>Body...</div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'>
              Close
            </button>
            <button type='button' className='btn btn-primary'>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// const mapStateToProps = state => ({ score: state.score })

// StartGameModal.defaultProps = {
//   score: 0
// }

// StartGameModal.propTypes = {
//   score: PropTypes.number
// }

// export default connect(mapStateToProps)(StartGameModal)

export default StartGameModal
