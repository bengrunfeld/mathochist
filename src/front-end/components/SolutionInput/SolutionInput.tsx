import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { BoxContainer, BoxText } from './styles'

const handleUserInput = e => {
  console.log('>>', e.target.userInput)
}

const SolutionInput = ({ width, userInput }) => (
  <BoxContainer className={width}>
    <input type='text' value={userInput} onChange={handleUserInput} />
  </BoxContainer>
)

const mapStateToProps = state => ({ userInput: state.userInput })

SolutionInput.defaultProps = {
  width: 'col-8',
  userInput: '222'
}

SolutionInput.propTypes = {
  width: PropTypes.string,
  userInput: PropTypes.string
}

export default connect(mapStateToProps)(SolutionInput)
