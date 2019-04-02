import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import Post from '../Post'


describe('<Post />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<Post />)
    expect(tree).toMatchSnapshot()
  })
})
