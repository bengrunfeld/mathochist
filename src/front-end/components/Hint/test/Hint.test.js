import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import Hint from '../Hint'

describe('<Hint />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<Hint />)
    expect(tree).toMatchSnapshot()
  })
})
