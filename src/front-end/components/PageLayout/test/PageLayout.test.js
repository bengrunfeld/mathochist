import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import About from '../About'

describe('<About />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<About />)
    expect(tree).toMatchSnapshot()
  })
})
