import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import App from '../App'

describe('<App />', () => {
  // test('renders a h1 tag', () => {
  //   const component = mount(<App />)
  //   expect(component.find('h1')).toHaveLength(1)
  // })

  test('matches the snapshot', () => {
    const tree = mount(<App />)
    expect(tree).toMatchSnapshot()
  })
})
