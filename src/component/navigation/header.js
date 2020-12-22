import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from './../../assets/rocket.svg'

function Header () {
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" sticky="top">
  <Navbar.Brand href="#home">
    <img
      src={logo}
      width='75px'
      height='75px'
    />
    {'         '}
    Sistema de Nomina</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Descripción</Nav.Link>
      <Nav.Link href="#pricing">Precios</Nav.Link>
      <NavDropdown title="Complementos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Registrate</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Ingresa
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </header>
  )
}

export default Header
