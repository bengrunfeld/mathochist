import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import Box from '../Box'

describe('<Box />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<Box />)
    expect(tree).toMatchSnapshot()
  })
})
