import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import Result from '../Result'

describe('<Result />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<Result />)
    expect(tree).toMatchSnapshot()
  })
})
