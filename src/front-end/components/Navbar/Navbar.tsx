import React from 'react'

import { NavbarContainer, Logo } from './styles'

const Navbar = () => (
  <NavbarContainer className='navbar navbar-expand-lg'>
    <Logo className='navbar-brand ml-2' to='/'>
      Mathochist
    </Logo>
  </NavbarContainer>
)

export default Navbar
