import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import StatsBox from '../StatsBox'

describe('<StatsBox />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<StatsBox />)
    expect(tree).toMatchSnapshot()
  })
})
