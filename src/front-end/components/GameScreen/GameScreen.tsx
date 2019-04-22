import React from 'react'
import GameInfo from '../GameInfo'
import Hint from '../Hint'
import ProblemBox from '../ProblemBox'
import SolutionInputBox from '../SolutionInputBox'
import ResultDisplay from '../ResultDisplay'

import { Screen } from './styles'

const GameScreen = () => (
  <Screen className='col-lg-6'>
    <GameInfo />
    <Hint />
    <ProblemBox />
    <SolutionInputBox />
    <ResultDisplay />
  </Screen>
)

export default GameScreen
