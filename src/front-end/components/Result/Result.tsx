import React from 'react'
import PropTypes from 'prop-types'

import { BoxContainer, BoxText, Box, Caption } from './styles'

const Result = ({ result, show }) => (
  <BoxContainer>
    <div>
      <Box result={result}>
        <BoxText>{result === 'correct' ? '✓' : '✘'}</BoxText>
      </Box>
      <Caption>{result === 'correct' ? 'Correct!' : 'Wrong'}</Caption>
    </div>
  </BoxContainer>
)

Result.defaultProps = {
  result: 'wrong',
  show: true
}

Result.propTypes = {
  result: PropTypes.string,
  show: PropTypes.bool
}

export default Result
