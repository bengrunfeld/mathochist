import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Bar = styled.nav`
  background: #e3e3e3ff;
  min-height: 100vh;
`

const LinkItem = styled(NavLink)`
  color: black;
  text-decoration: none;
  display: block;
  height: 38px;
  font-family: nunito, helvetica;

  &:hover {
    color: purple;
    text-decoration: none;
    font-size: 20px; 
  }

  &.active {
    font-weight: bold;
    color: black;
    font-size: 20px;
  }
`

export {
  Bar,
  LinkItem
}