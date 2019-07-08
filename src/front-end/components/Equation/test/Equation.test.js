import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import Equation from '../Equation'

describe('<Equation />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<Equation />)
    expect(tree).toMatchSnapshot()
  })
})
