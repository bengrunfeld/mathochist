import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import GameTime from '../GameTime'

describe('<GameTime />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<GameTime />)
    expect(tree).toMatchSnapshot()
  })
})
