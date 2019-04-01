import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Footer from '../Footer'

describe('<Footer />', () => {
  test('renders a p tag', () => {
    const component = mount(<Footer />)
    expect(component.find('p')).toHaveLength(1)
  })

  test('matches the snapshot', () => {
    const tree = mount(<Footer />)
    expect(tree).toMatchSnapshot()
  })
})
