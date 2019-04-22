import React from 'react'
import PropTypes from 'prop-types'

import { BoxContainer, BoxText } from './styles'

const SolutionBox = ({ width, solution }) => (
  <BoxContainer className={width}>
    <BoxText>{solution}</BoxText>
  </BoxContainer>
)

SolutionBox.defaultProps = {
  width: 'col-8',
  solution: '286'
}

SolutionBox.propTypes = {
  width: PropTypes.string,
  solution: PropTypes.string
}

export default SolutionBox
