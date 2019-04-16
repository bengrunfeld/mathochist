import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import PageLayout from '../PageLayout'
import setUpTree from '../../../../test/setUpTree'

describe('<PageLayout />', () => {
  test('matches the snapshot', () => {
    const tree = setUpTree(PageLayout, MemoryRouter, mount, '/')
    expect(tree).toMatchSnapshot()
  })
})
