import React from 'react'
import { Dropdown, Navbar } from 'react-bootstrap'
import { FaAccessibleIcon } from 'react-icons/fa'
import logo from '../../assets/logo.svg'

function NavBar () {
  return (
        <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="/">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {' '}
      React Bootstrap
    </Navbar.Brand>
<Dropdown>
  <Dropdown.Toggle variant="dark" id="dropdown-basic">
    <FaAccessibleIcon />
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Setting</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Activity Log</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  </Navbar>
  )
}

export default NavBar
