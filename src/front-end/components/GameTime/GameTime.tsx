import React from 'react'

import StatsBox from '../StatsBox'

const GameTime = ({ time }) => (
  <div>
    <StatsBox data={time} />
    <h4>Time</h4>
  </div>
)

export default GameTime
