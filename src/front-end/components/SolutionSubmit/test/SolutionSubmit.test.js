import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import SolutionSubmit from '../SolutionSubmit'

describe('<SolutionSubmit />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<SolutionSubmit />)
    expect(tree).toMatchSnapshot()
  })
})
