import React from 'react'
import PropTypes from 'prop-types'

import { BoxContainer, BoxText } from './styles'

const Box = ({ problem }) => (
  <BoxContainer>
    <BoxText>{problem}</BoxText>
  </BoxContainer>
)

Box.defaultProps = {
  problem: '1 x 1'
}

Box.propTypes = {
  problem: PropTypes.string
}

export default Box
