import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import App from '../App'
import Navbar from '../../Navbar'
import PageLayout from '../../PageLayout'
import Footer from '../../Footer'

import setUpTree from '../../../../test/setUpTree'


describe('<App />', () => {
  test('renders a Navbar', () => {
    const tree = setUpTree(App, MemoryRouter, mount, '/')
    expect(tree.find(Navbar)).toHaveLength(1)
  })

  test('renders a PageLayout', () => {
    const tree = setUpTree(App, MemoryRouter, mount, '/')
    expect(tree.find(PageLayout)).toHaveLength(1)
  })

  test('renders a Footer', () => {
    const tree = setUpTree(App, MemoryRouter, mount, '/')
    expect(tree.find(Footer)).toHaveLength(1)
  })

  test('matches the snapshot', () => {
    const tree = setUpTree(App, MemoryRouter, mount, '/')
    expect(tree).toMatchSnapshot()
  })
})
