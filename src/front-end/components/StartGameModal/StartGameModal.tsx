import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { StartGameDiv } from './styles'

const StartGameModal = ({ score }) => (
  <StartGameModalContainer>
    <StatsBox data={score} />
    <Caption>StartGameModal</Caption>
  </StartGameModalContainer>
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
