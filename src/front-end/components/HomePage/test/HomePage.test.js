import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import HomePage from '../HomePage'


describe('<HomePage />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<HomePage />)
    expect(tree).toMatchSnapshot()
  })
})
