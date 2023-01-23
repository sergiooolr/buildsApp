import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const HomePage = ({user}) => {

  return (
    <>
  
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">BuildsApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/homePage/lista">Lista</Nav.Link>
            <Nav.Link href="#pricing">Detalle</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/api/auth/logout">Salir</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div> Welcome {user.name}!</div>
    </>
    
  )
}
