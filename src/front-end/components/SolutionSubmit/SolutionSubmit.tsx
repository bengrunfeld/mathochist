import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BoxContainer, BoxButton, Triangle } from './styles'
import submitSolution from '../../state/result/actions'

const SolutionSubmit = ({ width, submitSolution }) => (
  <BoxContainer className={width}>
    <BoxButton className='float-right'>
      <Triangle />
    </BoxButton>
  </BoxContainer>
)

const mapDispatchToProps = { submitSolution }

export default connect(
  {},
  mapDispatchToProps
)(SolutionSubmit)
