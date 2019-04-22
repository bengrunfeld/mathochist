import React from 'react'
import ProblemBox from '../ProblemBox'

import { ProblemContainer, Caption } from './styles'

const Problem = () => (
  <ProblemContainer>
    <Caption>Solve</Caption>
    <ProblemBox problem='22 x 13' />
  </ProblemContainer>
)

export default Problem
