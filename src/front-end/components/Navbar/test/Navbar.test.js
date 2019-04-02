import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../Navbar'
import setUpTree from '../../../../test/setUpTree'


describe('<Navbar />', () => {
  test('matches the snapshot', () => {
    const tree = setUpTree(Navbar, MemoryRouter, mount, '/')
    expect(tree).toMatchSnapshot()
  })
})
