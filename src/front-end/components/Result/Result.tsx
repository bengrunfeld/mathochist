import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BoxContainer, BoxText, Box, Caption } from './styles'

import './styles.css'

const Result = ({ result }) => (
  <BoxContainer>
    <div>
      <Box className={result ? 'correct' : 'wrong'}>
        <BoxText>{result ? '✓' : '✘'}</BoxText>
      </Box>
      <Caption>{result ? 'Correct!' : 'Wrong'}</Caption>
    </div>
  </BoxContainer>
)

const mapStateToProps = state => ({ result: state.result })

Result.defaultProps = {
  result: false
}

Result.propTypes = {
  result: PropTypes.bool
}

export default connect(mapStateToProps)(Result)
