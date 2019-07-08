import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import EquationBox from '../EquationBox'

describe('<EquationBox />', () => {
  test('matches the snapshot', () => {
    const tree = mount(<EquationBox />)
    expect(tree).toMatchSnapshot()
  })
})
