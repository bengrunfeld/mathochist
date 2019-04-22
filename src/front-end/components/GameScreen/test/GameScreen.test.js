import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import GameScreen from '../GameScreen'

describe('<GameScreen />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<GameScreen />)
    expect(tree).toMatchSnapshot()
  })
})
