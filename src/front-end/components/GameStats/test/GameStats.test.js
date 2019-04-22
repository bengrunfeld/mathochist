import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import GameStats from '../GameStats'

describe('<GameStats />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<GameStats />)
    expect(tree).toMatchSnapshot()
  })
})
