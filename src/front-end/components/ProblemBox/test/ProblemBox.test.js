import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import ProblemBox from '../ProblemBox'

describe('<ProblemBox />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<ProblemBox />)
    expect(tree).toMatchSnapshot()
  })
})
