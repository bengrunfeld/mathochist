import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Page from '../Page'
import setUpTree from '../../../../test/setUpTree'


describe('<Page />', () => {
  test('matches the snapshot', () => {
    const tree = setUpTree(Page, MemoryRouter, mount, '/')
    expect(tree).toMatchSnapshot()
  })
})
