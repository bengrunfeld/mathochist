import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BoxContainer, BoxButton, Triangle } from './styles'
import submitSolution from '../../state/result/actions'

const SolutionSubmit = ({ width, submitSolution }) => (
  <BoxContainer className={width}>
    <BoxButton className='float-right' onClick={submitSolution}>
      <Triangle />
    </BoxButton>
  </BoxContainer>
)

const mapDispatchToProps = { submitSolution }
const mapStateToProps = state => ({ solutionInput: state.solutionInput })

SolutionSubmit.defaultProps = {
  width: ''
}

SolutionSubmit.propTypes = {
  width: PropTypes.string
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SolutionSubmit)
