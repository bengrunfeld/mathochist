import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = styled(Link)`
  font-family: comfortaa, helvetica;
  font-size: 20px !important;
  color: white;
`

const NavbarContainer = styled.nav`
  background: #0b5394 !important;
  height: 45px;
`

export { Logo, NavbarContainer }
