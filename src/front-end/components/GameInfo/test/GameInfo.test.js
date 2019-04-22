import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import GameInfo from '../GameInfo'

describe('<GameInfo />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<GameInfo />)
    expect(tree).toMatchSnapshot()
  })
})
