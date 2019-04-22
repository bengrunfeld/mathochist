import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import PlayerName from '../PlayerName'

describe('<PlayerName />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<PlayerName />)
    expect(tree).toMatchSnapshot()
  })
})
