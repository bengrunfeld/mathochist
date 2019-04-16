import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Sidebar from '../Sidebar'
import setUpTree from '../../../../test/setUpTree'


describe('<Sidebar />', () => {
  test('matches the snapshot', () => {
    const tree = setUpTree(Sidebar, MemoryRouter, mount, '/')
    expect(tree).toMatchSnapshot()
  })
})
