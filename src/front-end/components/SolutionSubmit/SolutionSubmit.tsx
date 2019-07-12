import React from 'react'
import PropTypes from 'prop-types'

import { BoxContainer, BoxButton, Triangle } from './styles'

const SolutionBox = ({ width }) => (
  <BoxContainer className={width}>
    <BoxButton className='float-right'>
      <Triangle />
    </BoxButton>
  </BoxContainer>
)

export default SolutionBox
