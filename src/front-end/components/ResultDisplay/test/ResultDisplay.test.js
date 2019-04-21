import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import ResultDisplay from '../ResultDisplay'

describe('<ResultDisplay />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<ResultDisplay />)
    expect(tree).toMatchSnapshot()
  })
})
