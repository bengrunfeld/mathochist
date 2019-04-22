import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import SolutionBox from '../SolutionBox'

describe('<SolutionBox />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<SolutionBox />)
    expect(tree).toMatchSnapshot()
  })
})
