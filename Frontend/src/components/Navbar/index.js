import React from 'react'
import {
Nav,
NavLink,
NavMenu
} from './NavbarElements';

const Navbar = () => {
  return (
   <>
    <Nav>
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
      <NavMenu>
        <NavLink to="/logare" actveStyle>
            Logare
        </NavLink>
        <NavLink to="/creare-cont" actveStyle>
            Creare cont
        </NavLink>
      </NavMenu>
    </Nav>
   </>
  )
}

export default Navbar