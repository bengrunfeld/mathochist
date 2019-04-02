import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'

import Footer from '../Footer'


describe('<Footer />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<Footer />)
    expect(tree).toMatchSnapshot()
  })
})
