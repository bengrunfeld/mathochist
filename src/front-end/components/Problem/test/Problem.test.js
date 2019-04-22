import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import Problem from '../Problem'

describe('<Problem />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<Problem />)
    expect(tree).toMatchSnapshot()
  })
})
