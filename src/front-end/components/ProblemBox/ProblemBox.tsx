import React from 'react'
import PropTypes from 'prop-types'

import { BoxContainer, BoxText } from './styles'

const ProblemBox = ({ problem }) => (
  <BoxContainer>
    <BoxText>{problem}</BoxText>
  </BoxContainer>
)

ProblemBox.defaultProps = {
  problem: '1 x 1'
}

ProblemBox.propTypes = {
  problem: PropTypes.string
}

export default ProblemBox
