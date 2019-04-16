import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import Router from '../Router'

describe('<Router />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<Router />)
    expect(tree).toMatchSnapshot()
  })
})
