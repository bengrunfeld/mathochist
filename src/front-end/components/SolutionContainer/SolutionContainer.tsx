import React from 'react'
import SolutionBox from '../SolutionBox'
import SolutionSubmit from '../SolutionSubmit'

import { SolutionContainer, Caption } from './styles'

const Solution = () => (
  <SolutionContainer>
    <Caption>Solution</Caption>
    <div className='row no-gutters'>
      <SolutionBox width='col-8' />
      <SolutionSubmit width='col-4' />
    </div>
  </SolutionContainer>
)

export default Solution
