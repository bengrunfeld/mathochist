import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'
import { MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import Post from '../Post'

const content = `
# Title

This is the first paragraph

This is the second paragraph
`

describe('<Post />', () => {
  beforeEach(() => fetch.resetMocks())

  test('fetches async data correctly', done => {
    fetch.mockResponseOnce(JSON.stringify(content))
    const tree = mount(<Post />) 

    setImmediate(() => {
      tree.update()
      expect(tree.find('p').length).toEqual(2)
      done()
    })
  })

//   test('matches the snapshot', () => {
//     const tree = mount(<Post />)
//     expect(tree).toMatchSnapshot()
//   })
})