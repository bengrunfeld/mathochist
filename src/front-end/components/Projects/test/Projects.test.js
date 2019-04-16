import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import Projects from '../Projects'


describe('<Projects />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<Projects />)
    expect(tree).toMatchSnapshot()
  })
})
