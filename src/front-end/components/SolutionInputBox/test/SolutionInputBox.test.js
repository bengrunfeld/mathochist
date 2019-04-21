import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import SolutionInputBox from '../SolutionInputBox'

describe('<SolutionInputBox />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<SolutionInputBox />)
    expect(tree).toMatchSnapshot()
  })
})
