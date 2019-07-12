import React from 'react'
import SolutionInput from '../SolutionInput'
import SolutionSubmit from '../SolutionSubmit'

import { SolutionContainer, Caption } from './styles'

const Solution = () => (
  <SolutionContainer>
    <Caption>Solution</Caption>
    <div className='row no-gutters'>
      <SolutionInput width='col-8' />
      <SolutionSubmit width='col-4' />
    </div>
  </SolutionContainer>
)

export default Solution
