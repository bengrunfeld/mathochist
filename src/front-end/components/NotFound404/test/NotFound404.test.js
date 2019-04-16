import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import NotFound404 from '../NotFound404'


describe('<NotFound404 />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<NotFound404 />)
    expect(tree).toMatchSnapshot()
  })
})
