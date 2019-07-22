import React from 'react'
import PropTypes from 'prop-types'

import GameInfo from '../GameInfo'
import Hint from '../Hint'
import Equation from '../Equation'
import SolutionContainer from '../SolutionContainer'
import Result from '../Result'
import StartGameModal from '../StartGameModal'

import { Screen } from './styles'

const GameScreen = ({ width }) => (
  <Screen className={width}>
    <GameInfo />
    <Hint />
    <StartGameModal />
    <Equation />
    <SolutionContainer />
    <Result />
  </Screen>
)

GameScreen.propTypes = {
  width: PropTypes.string
}

export default GameScreen
