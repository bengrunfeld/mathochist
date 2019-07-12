import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import SolutionInput from '../SolutionInput'

describe('<SolutionInput />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<SolutionInput />)
    expect(tree).toMatchSnapshot()
  })
})
