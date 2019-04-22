import React from 'react'
import PropTypes from 'prop-types'

import GameInfo from '../GameInfo'
import Hint from '../Hint'
import Problem from '../Problem'
import SolutionContainer from '../SolutionContainer'
import ResultDisplay from '../ResultDisplay'

import { Screen } from './styles'

const GameScreen = ({ width }) => (
  <Screen className={width}>
    <GameInfo />
    <Hint />
    <Problem />
    <SolutionContainer />
    <ResultDisplay />
  </Screen>
)

GameScreen.propTypes = {
  width: PropTypes.string
}

export default GameScreen
