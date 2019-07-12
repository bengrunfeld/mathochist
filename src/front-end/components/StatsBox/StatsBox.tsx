import React from 'react'
import PropTypes from 'prop-types'

import { Box, BoxData } from './styles'

const StatsBox = ({ data }) => (
  <Box>
    <BoxData>{data}</BoxData>
  </Box>
)

StatsBox.defaultProps = {
  data: 0
}

StatsBox.propTypes = {
  data: PropTypes.number
}

export default StatsBox
