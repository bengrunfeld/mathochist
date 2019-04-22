import React from 'react'
import PropTypes from 'prop-types'

import GameInfo from '../GameInfo'
import Hint from '../Hint'
import Problem from '../Problem'
import SolutionContainer from '../SolutionContainer'
import Result from '../Result'

import { Screen } from './styles'

const GameScreen = ({ width }) => (
  <Screen className={width}>
    <GameInfo />
    <Hint />
    <Problem />
    <SolutionContainer />
    <Result />
  </Screen>
)

GameScreen.propTypes = {
  width: PropTypes.string
}

export default GameScreen
