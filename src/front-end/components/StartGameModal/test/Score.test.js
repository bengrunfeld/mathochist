import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import Score from '../Score'

describe('<Score />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<Score />)
    expect(tree).toMatchSnapshot()
  })
})
