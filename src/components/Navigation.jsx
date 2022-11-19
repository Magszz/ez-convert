import React from 'react'

import { Container, Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">EZ Convert</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">PDF to Word</Nav.Link>
            <Nav.Link href="/convert/word-pdf">Word to PDF</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
