import React from 'react'
import PropTypes from 'prop-types'

import GameInfo from '../GameInfo'
import Hint from '../Hint'
import Problem from '../Problem'
import SolutionInputBox from '../SolutionInputBox'
import ResultDisplay from '../ResultDisplay'

import { Screen } from './styles'

const GameScreen = ({ width }) => (
  <Screen className={width}>
    <GameInfo />
    <Hint />
    <Problem />
    <SolutionInputBox />
    <ResultDisplay />
  </Screen>
)

GameScreen.propTypes = {
  width: PropTypes.string
}

export default GameScreen
