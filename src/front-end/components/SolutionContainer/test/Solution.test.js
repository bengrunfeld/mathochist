import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import Solution from '../Solution'

describe('<Solution />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<Solution />)
    expect(tree).toMatchSnapshot()
  })
})
