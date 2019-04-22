import React from 'react'
import PropTypes from 'prop-types'

import { Box, BoxData } from './styles'

const StatsBox = ({ data, statsType }) => (
  <Box>
    <BoxData type={statsType}>{data}</BoxData>
  </Box>
)

StatsBox.defaultProps = {
  data: '0',
  statsType: 'defaultStatsType'
}

StatsBox.propTypes = {
  data: PropTypes.string,
  statsType: PropTypes.string
}

export default StatsBox
