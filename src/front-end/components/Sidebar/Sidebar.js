import React from 'react'

import { Bar, LinkItem } from './styles'


const Sidebar = () => (
  <Bar className='col-lg-2 d-none d-lg-block'>
    <div className='d-flex flex-column'>
      <div className='ml-1 mt-5'>
        <LinkItem exact to='/'>Home</LinkItem>
        <LinkItem to='/page/about'>About</LinkItem>
        <LinkItem to='/page/projects'>Projects</LinkItem>
        <LinkItem to='/posts/react'>React</LinkItem>
        <LinkItem to='/posts/redux'>Redux</LinkItem>
        <LinkItem to='/posts/immutable'>Immutable</LinkItem>
      </div>
    </div>
  </Bar>
)

export default Sidebar
