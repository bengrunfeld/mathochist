import React from 'react'
import PropTypes from 'prop-types'

import { BoxContainer, Submit } from './styles'

const SolutionBox = ({ width }) => (
  <BoxContainer className={width}>
    <Submit />
  </BoxContainer>
)

export default SolutionBox
